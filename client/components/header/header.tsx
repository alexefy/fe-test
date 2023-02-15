import { useContext } from "react";
import clsx from "clsx";
import { Basket, OctopusLogo } from "../svg";
import { BasketContext } from "../../pages/product/[id]";
import { useScrollHandler } from "../../hooks/useScrollHandler"

const Header = () => {

  const [isScrolled] = useScrollHandler()

  const headerClasses = clsx(
    "fixed z-10 w-full h-24 px-5 flex bg-siphon ease-in-out duration-300",
    { "translate-y-0": !isScrolled, "-translate-y-24": isScrolled }
  )

  const basketTotal = useContext(BasketContext)

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center max-w-[800px] px-5 w-full mx-auto">
        <OctopusLogo width={382} />
        <div className="relative">
          <Basket width={52} />
          <p className="text-sohoLights font-bold text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" title="Basket items">{basketTotal.itemsInBasket}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;