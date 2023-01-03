import React from 'react'
import TopCover from '../components/TopCover'
import { shopCover } from '../assets'
import PriceSlider from '../components/subcomp/PriceSlider'
import ShopOutline from '../components/ShopOutline'

export default function Shop(props) {
  return (
    <>
    <TopCover img={shopCover}/>
    <ShopOutline data={props.data} />
    </>
  )
}
