import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Basket } from '../svg'
import Button from '../button'

export interface CartProps {
  total: number
}

const Cart = ({ total }: CartProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen)
  }

  useEffect(() => {
    const handleWindowScroll = () => {
      if (isCartOpen) {
        setIsCartOpen(false)
      }
    }

    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [isCartOpen])

  return (
    <div className="relative">
      <Button isCart title="cart-button" onClick={handleCartClick}>
        <Basket width={52} />
      </Button>
      <div
        title="cart"
        className={clsx(
          'bg-white absolute top-full left-1/2 transform -translate-x-1/2 p-5 rounded-2xl w-36',
          {
            hidden: !isCartOpen
          }
        )}
      >
        <p className="text-siphon font-bold text-xl" title="Basket items">
          You have {total} items in your basket
        </p>
      </div>
    </div>
  )
}

export default Cart
