import React from 'react'
import ProductCard from './subcomp/ProductCard'
import { useEffect, useState } from 'react'


export default function RecomndProduct(props) {

  // useEffect(() => {
  //   getData();
  // }, [])

  // const [data, setData] = useState();

  // const getData = async () => {
  //   try {
  //     const res = await FetchAPI();
  //     setData(res);
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  // console.log(data)

  if (props.data != undefined) {
    
    return (

      <div className='mx-20 my-28'>
  
      <div className='flex flex-row justify-between px-28 my-6'>
          <h1 className='font-bold text-3xl'>Best Seller</h1>
          <button className='font-bold text-sm text-[#F3692E]'>See All</button>
      </div>
  
      <div className='grid grid-cols-5 gap-y-10 gap-x-12'>
              <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category} />
              <ProductCard img={props.data[1].image} title={props.data[1].title} price={props.data[1].price} category={props.data[1].category} />
              <ProductCard img={props.data[2].image} title={props.data[2].title} price={props.data[2].price} category={props.data[2].category} />
              <ProductCard img={props.data[3].image} title={props.data[3].title} price={props.data[3].price} category={props.data[3].category} />
              <ProductCard img={props.data[4].image} title={props.data[4].title} price={props.data[4].price} category={props.data[4].category}/>        
      </div>
      </div>
  
    )
  }
  else {
    return(
    <>
    </>
    )
  }

  
}
