import clsx from "clsx";

export interface ButtonProps {
  children: React.ReactNode
  isIconButton?: boolean
  onClick?: () => void
  title: string
  isDisabled?: boolean
}

const Button = ({
  children,
  isIconButton,
  onClick,
  title,
  isDisabled
}: ButtonProps) => {
  const buttonClasses = () =>
    clsx("bg-sohoLights rounded-2xl flex items-center justify-center text-siphon transition duration-500", {
      'w-14 h-14 hover:scale-105': isIconButton,
      'w-full h-20 hover:scale-[1.02]': !isIconButton,
      'hover:brightness-125': !isDisabled,
      'opacity-25 cursor-not-allowed': isDisabled
    });
  return (
    <button title={title} onClick={onClick} className={buttonClasses()}>{children}</button>
  );
};

export default Button;  