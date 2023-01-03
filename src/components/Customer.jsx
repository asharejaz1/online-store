import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { customerInfo } from "../constants/custInfo";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
    <div className="flex justify-center items-center my-28">
            <div className="w-[50rem]">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        <SwiperSlide>
                            <div className="flex flex-col bg-[#FFEFEB] h-72 w-[40rem] items-center">
                                
                                <div className="flex flex-col h-16 w-16 my-6">
                                    <img src={customerInfo[0].imgLoc} className="rounded-full"/>
                                </div>    
                                
                                <p className="my-4 text-xs px-4">{customerInfo[0].review}</p>
                                <h1 className="mt-2 text-lg font-bold">{customerInfo[0].name}</h1>
                                <p className="text-xs">{customerInfo[0].occupation}</p>

                            </div>

                        </SwiperSlide>
                           
                           

                        <SwiperSlide>
                        <div className="flex flex-col bg-[#FFEFEB] h-72 w-[40rem]  items-center">
                                
                                <div className="flex flex-col h-16 w-16 my-6">
                                    <img src={customerInfo[1].imgLoc} className="rounded-full"/>
                                </div>    
                                
                                <p className="my-4 text-xs px-4">{customerInfo[1].review}</p>
                                <h1 className="mt-2 text-lg font-bold">{customerInfo[1].name}</h1>
                                <p className="text-xs">{customerInfo[1].occupation}</p>

                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className="flex flex-col bg-[#FFEFEB] h-72 w-[40rem]  items-center">
                                
                                <div className="flex flex-col h-16 w-16 my-6">
                                    <img src={customerInfo[2].imgLoc} className="rounded-full"/>
                                </div>    
                                
                                <p className="my-4 text-xs px-4">{customerInfo[2].review}</p>
                                <h1 className="mt-2 text-lg font-bold">{customerInfo[2].name}</h1>
                                <p className="text-xs">{customerInfo[2].occupation}</p>

                            </div>

                        </SwiperSlide>


                        <SwiperSlide>

                        <div className="flex flex-col bg-[#FFEFEB] h-72 w-[40rem]  items-center">
                                
                                <div className="flex flex-col h-16 w-16 my-6">
                                    <img src={customerInfo[3].imgLoc} className="rounded-full"/>
                                </div>    
                                
                                <p className="my-4 text-xs px-4">{customerInfo[3].review}</p>
                                <h1 className="mt-2 text-lg font-bold">{customerInfo[3].name}</h1>
                                <p className="text-xs">{customerInfo[3].occupation}</p>

                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className="flex flex-col bg-[#FFEFEB] h-72 w-[40rem]  items-center">
                                
                                <div className="flex flex-col h-16 w-16 my-6">
                                    <img src={customerInfo[4].imgLoc} className="rounded-full"/>
                                </div>    
                                
                                <p className="my-4 text-xs px-4">{customerInfo[4].review}</p>
                                <h1 className="mt-2 text-lg font-bold">{customerInfo[4].name}</h1>
                                <p className="text-xs">{customerInfo[4].occupation}</p>

                            </div>

                        </SwiperSlide>

                    </Swiper>
            </div>
    </div>
    </>
  );
}