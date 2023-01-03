import React from 'react'
import Button from './subcomp/Button'

export default function Discount() {
  return (
    <div className='bg-[#F86338] mx-20 text-white my-28 py-32'>
      
      <div className='flex flex-col items-center space-y-16'>
      <p className='font-bold text-lg'>March Discount</p>
      <h1 className='font-bold text-6xl'>Up to 70% Off</h1>
      
      {/*importing button from subcomponents*/}
      <Button bgColor="white" btnTitle="Got it" txtColor="[#7A6005]"/>
      </div>
    
    </div>
  )
}
