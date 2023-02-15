import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import ProductDetail, { GET_PRODUCT } from '../pages/product/[id]'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { MockedProvider } from '@apollo/client/testing'

const mocks = [
  {
    request: {
      query: GET_PRODUCT,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        Product: {
          id: 1,
          name: 'Energy saving light bulb',
          description: 'Energy saving light bulb',
          img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
          quantity: 5,
          power: 100,
          price: 10.99,
          brand: 'Philips',
          weight: 77,
          height: 12.6,
          width: 6.2,
          length: 6.2,
          model_code: 'E27 ES',
          colour: 'Cool daylight'
        }
      }
    }
  }
]

const mockUseRouter = {
  query: { id: '1' },
  push: jest.fn()
}

jest.mock('next/router', () => ({
  useRouter: () => mockUseRouter
}))

test('should be able to increase and decrease product quantity', async () => {
  const client = new ApolloClient({
    cache: new InMemoryCache()
  })

  const { getByTitle } = render(
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductDetail />
      </MockedProvider>
    </ApolloProvider>
  )

  await waitFor(() => getByTitle('Current quantity'))

  const increaseQuantity = getByTitle('plus')

  const currentQuantity = getByTitle('Current quantity')
  expect(currentQuantity).toHaveTextContent('1')

  fireEvent.click(increaseQuantity)
  expect(currentQuantity).toHaveTextContent('2')

  const decreaseQuantity = getByTitle('minus')

  fireEvent.click(decreaseQuantity)
  expect(currentQuantity).toHaveTextContent('1')
})

test('should be able to add items to the basket', async () => {
  const client = new ApolloClient({
    cache: new InMemoryCache()
  })

  const { getByTitle, getByText } = render(
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductDetail />
      </MockedProvider>
    </ApolloProvider>
  )

  await waitFor(() => getByTitle('Current quantity'))

  const increaseQuantity = getByTitle('plus')

  const currentQuantity = getByTitle('Current quantity')

  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)

  expect(currentQuantity).toHaveTextContent('4')

  const addToBasketElement = getByText('Add to cart')
  fireEvent.click(addToBasketElement)

  const basketItems = getByTitle('Basket items')
  expect(basketItems).toHaveTextContent('4')
})
