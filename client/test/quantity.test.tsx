import { render, fireEvent } from "@testing-library/react"
import Quantity from "../components/quantity"


test("should be able to increase and decrease product quantity", async () => {
  const updateQtySelected = jest.fn()
  const { getByTitle, getByText } = render(<Quantity updateQtySelected={updateQtySelected} />)

  const minusButton = getByTitle("minus")
  const plusButton = getByTitle("plus")
  const quantityValue = getByText("1")

  fireEvent.click(minusButton)
  expect(quantityValue).toHaveTextContent("1")

  // Can not exceed Qty of 5
  fireEvent.click(plusButton)
  fireEvent.click(plusButton)
  fireEvent.click(plusButton)
  fireEvent.click(plusButton)
  fireEvent.click(plusButton)
  expect(quantityValue).toHaveTextContent("5")

  // Can not go under Qty of 1
  fireEvent.click(minusButton)
  fireEvent.click(minusButton)
  fireEvent.click(minusButton)
  fireEvent.click(minusButton)
  fireEvent.click(minusButton)
  expect(quantityValue).toHaveTextContent("1")
})
