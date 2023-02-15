const Specification = ({ power, qty }) => {
  const renderQty = (qty) => ` // Packet of ${qty}`
  return (
    <p className="text-purpleHaze">
      {power}
      {qty && renderQty(qty)}
    </p>
  )
}

export default Specification
