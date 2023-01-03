import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='flex flex-col mx-1 h-[26rem] w-64 items-center text-center justify-start'>

        <div className='h-60 w-60 rounded-md'>
            <img src={props.img} className="object-contain h-full w-full"/>
        </div>

        <div className='flex flex-col space-y-0.25 mt-6 items-center'>
            <p className='text-xs font-bold text-[#F3692E]'>{props.category}</p>
            <h1 className='font-bold text-xl'>{props.title}</h1>
            <h2 className='font-bold text-xl text-[#F3692E]'>${props.price}</h2>
        </div>
    </div>
  )
}
