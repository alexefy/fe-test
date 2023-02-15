import React from 'react'
import { expect, test } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from '../components/cart'

test('should be able to toggle the visibility of cart with click or scroll', async () => {
  const { getByTitle } = render(<Cart total={3} />)

  // Cart is hidden by default
  expect(getByTitle('cart')).toHaveClass('hidden')

  // Click the cart button to show the cart
  fireEvent.click(getByTitle('cart-button'))
  expect(getByTitle('cart')).not.toHaveClass('hidden')
})
