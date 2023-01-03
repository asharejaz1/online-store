import React from 'react'
import Discount from '../components/Discount'
import LandingHome from '../components/LandingHome'
import Customer from '../components/Customer'
import HomeProductSlider from '../components/HomeProductSlider'
import RecomndProduct from '../components/RecomndProduct'
import HomeLongCards from '../components/HomeLongCards'

export default function Home(props) {
  return (
    <>
    <LandingHome/>
    <HomeLongCards data={props.data}/>
    <HomeProductSlider data={props.data}/>
    <Discount/>
    <RecomndProduct data={props.data}/>
    <Customer/>
    </>
  )
}
