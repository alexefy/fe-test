import React from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  children: React.ReactNode
  isIconButton?: boolean
  onClick?: () => void
  title: string
  isDisabled?: boolean
  isCart?: boolean
}

const Button = ({
  children,
  isIconButton,
  onClick,
  title,
  isDisabled,
  isCart
}: ButtonProps) => {
  const buttonClasses = () =>
    clsx('rounded-2xl flex items-center justify-center text-siphon transition duration-500', {
      'bg-sohoLights': !isCart,
      'w-14 h-14 hover:scale-105': isIconButton,
      'w-full h-20 hover:scale-[1.02]': !isIconButton,
      'hover:brightness-125': !isDisabled,
      'opacity-25 cursor-not-allowed': isDisabled,
      'bg-': isCart
    })
  return (
    <button title={title} onClick={onClick} className={buttonClasses()}>{children}</button>
  )
}

export default Button
