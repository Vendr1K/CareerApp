import React, { useState } from 'react'

export const CheckBox = ({ cheked, value }) => {
  const [isCheked, setIsCheked] = useState(cheked)

  return <input type='checkbox' value={value} checked={isCheked} />
}
