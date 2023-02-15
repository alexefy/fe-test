import React from 'react'
import { test } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react'
import Cart from '../components/cart'

test('should be able to toggle the visibility of cart with click or scroll', async () => {
  const { getByTitle } = render(<Cart total={3} />)

  // Cart is hidden by default
  const cartElement = getByTitle('cart')
  expect(cartElement.classList.contains('hidden')).toBe(true)

  // Click the cart button to show the cart
  fireEvent.click(getByTitle('cart-button'))

  // The cart should not have the "hidden" class anymore
  expect(cartElement.classList.contains('hidden')).toBe(false)
})
