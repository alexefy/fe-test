import React from 'react'

export interface SpecificationProps {
  power: string
  qty: number
}

const Specification = ({ power, qty }: SpecificationProps) => {
  const renderQty = (qty: SpecificationProps['qty']) => ` // Packet of ${qty}`
  return (
    <p className="text-purpleHaze">
      {power}
      {qty && renderQty(qty)}
    </p>
  )
}

export default Specification
