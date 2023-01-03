import React from 'react'

export default function Button(props) {
  return (

    <button className = {`bg-${props.bgColor} px-5 py-2.5 text-xs rounded-md text-${props.txtColor} font-medium`}>{props.btnTitle} {'>'}</button>

      
  )
}
