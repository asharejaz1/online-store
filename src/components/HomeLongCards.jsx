import React from 'react'
import LongCard from './subcomp/LongCard'

export default function HomeLongCards(props) {

  
  if (props.data != undefined) {
      
    let womenDress = []
    for (let i=0; i<(props.data).length; i++) {

      if ((womenDress).length==5) {
        break;
      }

      if (props.data[i].category == "women's clothing") {
        womenDress.push(props.data[i].image)
      }
  }
    
    return (
        <div className='flex flex-row px-20 justify-center my-28'>

            <div className='grid grid-cols-3 gap-x-2 gap-y-6'>
              
              <div className={`transition-all duration-500 flex flex-col justify-end space-y-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-80 px-6 items-start pb-10 rounded-lg hover:w-[20.5rem] hover:h-[31rem]`}>
                  <h1 className='text-4xl text-white font-bold'>Women's Dresses</h1>
                  <p className='text-xs text-white font-bold'>This is a short description for the dresses category of products that will be displayed in these long cards</p>
                  <button className='transition-all duration-500 bg-[#F86338] rounded-full text-white px-3 py-2 hover:bg-white hover:text-[#F86338]'> {`->`} </button>
              </div>
                {womenDress.map( (item) => {
                console.log(item)
                return (<LongCard img={item}/>) 
                } 
                )}

            </div>
        </div>
      )
  }
  else {
    return (
      <div className='flex flex-row px-20 justify-center my-28'>

            <div className='grid grid-cols-3 gap-2'>
              
              <div className={`flex flex-col justify-end space-y-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[30rem] w-80 px-6 items-start pb-10`}>
                  <h1 className='text-4xl text-white font-bold'>Women's Dresses</h1>
                  <p className='text-xs text-white font-bold'>This is a short description for the dresses category of products that will be displayed in these long cards</p>
                  <button className='transition-all duration-500 bg-[#F86338] rounded-full text-white px-3 py-2 hover:bg-white hover:text-[#F86338]'> {`->`} </button>
              </div>
            </div>
        </div>


    )
  }
}
