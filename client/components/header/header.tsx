import React, { useContext } from 'react'
import clsx from 'clsx'
import { BasketContext } from '../../pages/product/[id]'
import { useScrollHandler } from '../../hooks/useScrollHandler'
import { OctopusLogo } from '../svg'
import Cart from '../cart'

const Header = () => {
  const [isScrolled] = useScrollHandler()

  const headerClasses = clsx(
    'fixed z-10 w-full h-24 px-5 flex bg-siphon ease-in-out duration-300',
    { 'translate-y-0': !isScrolled, '-translate-y-24': isScrolled }
  )

  const basketTotal = useContext(BasketContext)

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center max-w-[800px] px-5 w-full mx-auto">
        <OctopusLogo width={382} />
        <Cart total={basketTotal.itemsInBasket} />
      </div>
    </header>
  )
}

export default Header
