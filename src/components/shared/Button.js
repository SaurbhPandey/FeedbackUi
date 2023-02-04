import React from 'react'

const Button = ({children , type , version , isDisabled}) => {
  return (
    <button type = {type} disabled ={isDisabled} className ={`btn btn-${version}`}>{children}</button>
  )
}

Button.defaultProps={
  isDisabled : false,
  type :'submit',
  version:'primary',
}
export default Button;