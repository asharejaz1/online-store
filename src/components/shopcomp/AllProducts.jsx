// import React, {useState, useEffect} from 'react'
// import ProductCard from '../subcomp/ProductCard'

// export default function AllProducts() {
  
//   let [indexArr, setIndexArr] = useState([]) 
//   let arr = []
  
//   const catgFunc = (newtype) => {

//     if (props.data != undefined) {
        
//           if (newtype === "all") {
//             arr = []
//             for (let i = 0; i<(props.data).length; i++) {
//               arr.push(i)
//             }
//           }
    
//           else if (newtype === "men") {
//             arr = []
//             for (let i = 0; i<(props.data).length; i++) {
//               if (props.data[i].category === "men's clothing") {
//                 arr.push(i)
//               }
//             }
//           }
    
//           else if (newtype === "women") {
//             arr = []
//             for (let i = 0; i<(props.data).length; i++) {
//               if (props.data[i].category === "women's clothing") {
//                 arr.push(i)
//               }
//             }
//           }
    
//           else if (newtype === "jewelery") {
//             arr = []
//             for (let i = 0; i<(props.data).length; i++) {
//               if (props.data[i].category === "jewelery") {
//                 arr.push(i)
//               }
//             }
//           }
    
//           else if (newtype === "electronics") {
//             arr = []
//             for (let i = 0; i<(props.data).length; i++) {
//               if (props.data[i].category === "electronics") {
//                 arr.push(i)
//               }
//             }
//           }
          
//           console.log(arr)
//           setType(newtype)
//           setIndexArr(arr)
//           console.log(indexArr);
    
//         }
// }
  
//   return (
//    <>
//             <div className='flex flex-col items-start space-y-3'>
//                 <h1 className='font-bold text'>Categories</h1>
//                 <button className='text-sm' onClick={() => catgFunc("all")}>All</button>
//                 <button className='text-sm' onClick={() => catgFunc("men")}>Men's Clothing</button>
//                 <button className='text-sm' onClick={() => catgFunc("women")}>Women's Clothing</button>
//                 <button className='text-sm' onClick={() => catgFunc("jewelery")}>Jewelery</button>
//                 <button className='text-sm' onClick={() => catgFunc("electronics")}>Electronics</button>
//             </div>
//    </>
//   )
// }
