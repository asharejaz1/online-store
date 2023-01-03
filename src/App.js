import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Header from './components/Header'
import Footer from './components/Footer'



async function FetchAPI() {

  const getProduct = await fetch('https://fakestoreapi.com/products')
  const myJson = await getProduct.json()
  const ProductsObj = [...myJson]
  return ProductsObj
}




function App() {

  useEffect(() => {
    getData();
  }, [])
  
  const [data, setData] = useState();
  
  const getData = async () => {
    try {
      const res = await FetchAPI();
      setData(res);
    }
    catch (err) {
      console.log(err)
    }
  }

  if (data != undefined) {
    return (
      <Router>
        <Header/>
          <Routes>
  
              <Route path="/" element={<Home data={data} className='font-poppins'/>}/>
              <Route path="/shop" element={<Shop data={data} className='font-poppins'/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
  
          </Routes>
          <Footer/>
      </Router>
  
    );
  }
  else {
    return (<></>)
  }
  
}

export default App;
