import React from 'react'
import { mainLogoImg } from '../assets'
import { locLogoImg } from '../assets'
import { mailLogoImg } from '../assets'
import { phoneLogoImg } from '../assets'

export default function Footer() {
  return (
    <div className='bg-[#F86338] flex flex-row justify-between px-20 text-white py-14 text-xs'>
      
        {/*div1 for logo, desc, copyright text */}
        <div className='space-y-2'>

            {/*logo + text */}
            <div className='flex flex-row py-2'>
                <img src={mainLogoImg} className='h-10 mr-2'/>
                <h1 className='my-1.5 text-lg'><span className='font-bold'>Ext</span>Commerce</h1>
            </div>

            {/*desc */}
            <div className='w-96'>
                <p>Our studio is a digital agency UI / UX Design and Website Development located in Ohio,United States of America</p>
            </div>
            
            {/*copyright text */}
            <div className='py-14'>
                <p>Copyright Tanah Air Studio</p>
            </div>

        </div>


        {/*div2 for social headings and social links*/}
        <div className='flex flex-row space-x-32 items'>
            
            {/*heading + social links*/}
            <div className='flex flex-col space-y-3'>
                <h1 className='font-bold mb-5'>Our Social Media</h1>
                <button className='text-left'>Facebook</button>
                <button className='text-left'>Twitter</button>
                <button className='text-left'>Instagram</button>
                <button className='text-left'>YouTube</button>
            </div>

            {/*heading + info with logos*/}
            <div className='space-y-8'>
                {/*main heading*/}
                <h1 className='font-bold'>Contact</h1>
                
                {/*logo + text*/}
                <div className='flex flex-row space-x-2'>
                    <img src={locLogoImg} className='h-4'/>
                    <p className='w-[60%]'>8819 Ohio St.South Gate, California 90280</p>
                </div>

                {/*logo + text*/}
                <div className='flex flex-row space-x-2'>
                    <img src={mailLogoImg} className='h-4'/>
                    <p className='w-[60%]'>ourstudio@hello.com</p>
                </div>

                {/*logo + text*/}
                <div className='flex flex-row space-x-2'>
                    <img src={phoneLogoImg} className='h-4'/>
                    <p className='w-[60%]'>+271 386-647-3637</p>
                </div>
                

            </div>
            
        </div>


    </div>
  )
}
