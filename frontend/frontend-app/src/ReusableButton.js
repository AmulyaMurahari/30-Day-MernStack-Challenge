import React from 'react'

const ReusableButton = ({ onClick, label }) => {
  return (
    <button onClick = {onClick}>
        {label}
    </button>
  )
};

export default ReusableButton;