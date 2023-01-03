import React from 'react'

export default function rateFilter(props) {
  return (
    <>
    
    <div>
        <img src={props.img} className='w-20 object-contain'/>
    </div>

    <div className='w-20'>
        <p className={`text-xs font-bold`}>{props.minRate} & up</p>
    </div>  
    </>  
  )
}
