import React from 'react'
import { dialerImg } from '../assets'
import { mainLogoImg } from '../assets'
import { fbLogoImg } from '../assets'
import { twLogoImg } from '../assets'
import { lgLogoImg } from '../assets'
import { ytLogoImg } from '../assets'
import { heartImg } from '../assets'
import { cartImg } from '../assets'
import { accountImg } from '../assets'

import { Link } from 'react-router-dom'



export default function header() {
  return (
    <div className=' space-y-4 py-2'>

        {/* upper div */}  
        <div className='flex flex-row justify-between px-20'>
            
            {/* phone contact (logo + number) */}  
            <div className='flex flex-row py-4'>
                <img src={dialerImg} className='h-4 mr-2'/>
                <p className='text-xs'>+022 319 821 967</p>
            </div>

            {/* middle logo + heading */}  
            <div className='flex flex-row py-2'>
                <img src={mainLogoImg} className='h-8 mr-2'/>
                <h1 className='my-1'><span className='font-bold'>Ext</span>Commerce</h1>
            </div>

            {/* 4 social icons (fb,tw,lg,yt) */}  
            <div className='flex flex-row py-3 space-x-2'>
                <img src={fbLogoImg} className='h-6'/>
                <img src={twLogoImg} className='h-6'/>
                <img src={lgLogoImg} className='h-6'/>
                <img src={ytLogoImg} className='h-6'/>
            </div>

        </div>


        {/* lower div */}  
        <div className='flex flex-row justify-between px-20'>
          {/* pages */}  
          <div className='flex flex-row space-x-6 text-xs' onClick={`text-blue-500`}>
            <Link to="/" className='transition-all delay-150 hover:font-bold'>Home</Link>
            <Link to="/shop"  className='transition-all delay-150 hover:font-bold'>Shop</Link>
            <Link to="/"  className='transition-all delay-150 hover:font-bold'>FAQ</Link>
            <Link to="/"  className='transition-all delay-150 hover:font-bold'>Blog</Link>
          </div>

          {/* heart + cart + account icons */}  
          <div className='flex flex-row space-x-6'>
            <img src={heartImg} className='h-5'/>
            <img src={cartImg} className='h-5'/>
            <img src={accountImg} className='h-5'/>
          </div>

        </div>

    </div>
  )
}
