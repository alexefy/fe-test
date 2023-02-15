import { useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import Button from '../button'

const Quantity = ({ updateQtySelected }) => {
  const [quantity, setQuantity] = useState(1)
  const addQuantity = () => quantity < 5 ? setQuantity(quantity + 1) : setQuantity(5)
  const minusQuantity = () => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)

  useEffect(() => {
    updateQtySelected(quantity)
  }, [quantity, updateQtySelected])

  return (
    <div className='flex items-center pb-5'>
      <Button isDisabled={quantity <= 1} title="minus" onClick={minusQuantity} isIconButton>
        <FaMinus fill={quantity <= 1 ? '#ffffff' : '#100030'} />
      </Button>
      <div className="relative">
        <span className='absolute -top-9 left-1/2 transform -translate-x-1/2'>Qty</span>
        <div title="Current quantity" className="text-4xl text-center w-12">{quantity}</div>
      </div>
      <Button isDisabled={quantity >= 5} title="plus" onClick={addQuantity} isIconButton>
        <FaPlus fill={quantity >= 5 ? '#ffffff' : '#100030'} />
      </Button>
    </div>
  )
}

export default Quantity
