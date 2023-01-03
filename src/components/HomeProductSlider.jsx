import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from './subcomp/ProductCard'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Navigation } from "swiper";

export default function HomeProducts(props) {

  if (props.data != undefined) {
    return (
      <div className='my-28'>
      
      <div className='flex flex-row justify-between px-36 my-6'>
          <h1 className='font-bold text-3xl'>New Arrival</h1>
          <button className='font-bold text-sm text-[#F3692E]'>See All</button>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

      <SwiperSlide>
        <ProductCard img={props.data[19].image} title={props.data[19].title} price={props.data[19].price} category={props.data[19].category}/>
        <ProductCard img={props.data[18].image} title={props.data[18].title} price={props.data[18].price} category={props.data[18].category}/>
        <ProductCard img={props.data[17].image} title={props.data[17].title} price={props.data[17].price} category={props.data[17].category}/>
        <ProductCard img={props.data[16].image} title={props.data[16].title} price={props.data[16].price} category={props.data[16].category}/>
        <ProductCard img={props.data[15].image} title={props.data[15].title} price={props.data[15].price} category={props.data[15].category}/>
      </SwiperSlide>

      <SwiperSlide>
        <ProductCard img={props.data[14].image} title={props.data[14].title} price={props.data[14].price} category={props.data[14].category}/>
        <ProductCard img={props.data[13].image} title={props.data[13].title} price={props.data[13].price} category={props.data[13].category}/>
        <ProductCard img={props.data[12].image} title={props.data[12].title} price={props.data[12].price} category={props.data[12].category}/>
        <ProductCard img={props.data[11].image} title={props.data[11].title} price={props.data[11].price} category={props.data[11].category}/>
        <ProductCard img={props.data[10].image} title={props.data[10].title} price={props.data[10].price} category={props.data[10].category}/>
      </SwiperSlide>

      {/* <SwiperSlide>
        <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category}/>
        <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category}/>
        <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category}/>
        <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category}/>
        <ProductCard img={props.data[0].image} title={props.data[0].title} price={props.data[0].price} category={props.data[0].category}/>
      </SwiperSlide> */}


      </Swiper>
      
      </div>
    )
  }

  else {
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide></SwiperSlide>
    <SwiperSlide></SwiperSlide>
    </Swiper>
  }
}
