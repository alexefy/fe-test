import { renderHook } from '@testing-library/react-hooks'
import { useProduct } from '../hooks/useProduct'

describe('useProduct', () => {
  const productData = {
    id: 1,
    name: 'Energy saving light bulb',
    power: '25W',
    description:
      'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
    price: 1299,
    quantity: 4
  }

  it('should return null if no data is provided', () => {
    const { result } = renderHook(() => useProduct(null))
    expect(result.current).toBeNull()
  })

  it('should return the product if data is provided', () => {
    const { result } = renderHook(() => useProduct(productData))
    expect(result.current).toEqual(productData)
  })

  it('should update the product if data changes', () => {
    const { result, rerender } = renderHook((props) => useProduct(props), {
      initialProps: productData
    })

    expect(result.current).toEqual(productData)

    const newData = {
      ...productData,
      name: 'LED light bulb',
      quantity: 3
    }
    rerender(newData)

    expect(result.current).toEqual(newData)
  })
})
