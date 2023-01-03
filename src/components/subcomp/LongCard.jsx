import React from 'react'

export default function LongCard(props) {
  return (
    <div className='h-[30rem] w-80'>
      <img src={props.img} className='object-contain h-full w-full'/>
    </div>
  )
}
