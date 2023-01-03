import React from 'react'
import Button from './subcomp/Button'
import { modelOne, modelTwo, modelThree } from '../assets'

export default function LandingHome() {
  return (
    <div className='flex flex-row my-10'>
        
        {/*Heading + Desc + Button */}
        <div className='bg-blue-0 space-y-8 pt-12 ml-20'>
            <h1 className='text-5xl w-[70%] font-bold'>Sort out Your Spring Look</h1>
            <p className='text-sm w-[55%]'>We will help to develop every smallest thing into a big one for your company</p>
            <Button bgColor="[#F86338]" txtColor="white" btnTitle="Shop"/>
        </div>
        
        {/*Images Card */}
        <div className='flex flex-row bg-red-0 space-x-2 ml-5'>
            <img className='h-[30rem] rounded-lg' src={modelOne}/>
            <img className='h-[30rem] rounded-lg' src={modelTwo}/>
            <img className='h-[30rem] rounded-lg' src={modelThree}/>
        </div>

    </div>
  )
}
