import React from 'react'

export default function TopCover(props) {
  return (

    <>
    {/*main cover div*/}
    <div className='flex flex-row h-96 my-10 w-full'>
        
        {/*cover page title div*/}
        <div className='flex flex-row font-black font-poppins text-7xl w-[35%] h-full items-center justify-center'> 
        
        <div className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text'>Shop</div> 
        
        </div>

         {/*cover image div*/}   
        <div className='w-[65%]'>
            <img src={props.img} className='object-cover w-full h-full'/>
        </div>

    </div>
    </>
  )
}
