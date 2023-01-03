import React, { useState, useEffect } from "react";
import { threeStar, threeHStar, fourStar, fourHStar } from "../assets";
import ProductCard from "./subcomp/ProductCard";
import RecomndProduct from "./RecomndProduct";
import RateFilter from "./shopcomp/RateFilter";
import Button from "./subcomp/Button";

export default function ShopOutline(props) {

  let tempFilteredData;
  
  const [priceVal, setPriceVal] = useState({
    minInput: undefined,
    maxInput: undefined,
  });

  const [errorFlag, setErrorFlag] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(undefined);
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => props.data ? setFilteredData(props.data) : null, []);

  useEffect(() => {
    tempFilteredData = props.data;

    // Category Filter
    if (categoryFilter === "all") {
      setFilteredData(props.data);
    } else {
      tempFilteredData = props.data.filter(
        (item) => item.category === categoryFilter
      );
    }

	  if (ratingFilter !== undefined)
	    // Rating Filter (filter products with rating greater than or equal to the selected rating)
	    tempFilteredData = tempFilteredData.filter(
	      (item) => item.rating.rate >= ratingFilter
	    );

    // Price Filter (filter products withing the price range)
    console.log("maxInput = " + priceVal.maxInput)
    console.log("minInput = " + priceVal.minInput)
    if (priceVal.minInput !== undefined) {
      console.log("min not undef")
      tempFilteredData = tempFilteredData.filter(
        (item) => item.price >= priceVal.minInput
      );
    }

    if (priceVal.maxInput !== undefined) {
      console.log("max not undef")
      tempFilteredData = tempFilteredData.filter(
        (item) => item.price <= priceVal.maxInput
      );
    }

    if (priceVal.maxInput == "" && priceVal.minInput == "") {

      setPriceVal(() => {
        
          return ({
            minInput: undefined,
            maxInput: undefined,
          })
    
    })
  }


    if (priceVal.maxInput == "") {

      setPriceVal((preValue) => {
        
        return ({
          minInput: preValue.minInput,
          maxInput: undefined,
        })
  
      })

    }


    if (priceVal.minInput == "") {

      setPriceVal((preValue) => {
        
        return ({
          minInput: undefined,
          maxInput: preValue.maxInput,
        })
  
      })


    }


    if (searchInput != "") {
      tempFilteredData = tempFilteredData.filter((currElem) => 
        currElem.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    }


    setFilteredData(tempFilteredData);
    console.table(tempFilteredData);
  }, [categoryFilter, ratingFilter, priceVal, searchInput]);

  const priceFunc = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setPriceVal((preValue) => {
      if (name === "minInput") {
        return {
          minInput: value,
          maxInput: preValue.maxInput,
        };
      } else if (name === "maxInput") {
        return {
          minInput: preValue.minInput,
          maxInput: value,
        };
      }
    });
  };


  return (
    <>
      <div className="flex flex-row bg-red-0 mx-20 my-10 font-poppins">
        {/*Left Div for Tools */}
        <div className="flex flex-col w-[25%] bg-green-0 space-y-8">
          {/*categories */}
          <div className="flex flex-col items-start space-y-3">
            <h1 className="font-bold text">Categories</h1>
            <button
              className={`text-sm ${categoryFilter==='all'?'font-bold':'font-normal'}`}
              onClick={() => setCategoryFilter("all")}
            >
              All
            </button>
            <button
              className={`text-sm ${categoryFilter==="men's clothing"?'font-bold':'font-normal'}`}
              onClick={() => setCategoryFilter("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className={`text-sm ${categoryFilter==="women's clothing"?'font-bold':"font-normal"}`}
              onClick={() => setCategoryFilter("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className={`text-sm ${categoryFilter==='jewelery'?'font-bold':'font-normal'}`}
              onClick={() => setCategoryFilter("jewelery")}
            >
              Jewelery
            </button>
            <button
            //{categoryFilter=='electronics'?(font-bold):(font-normal) }
              className={`text-sm ${categoryFilter==='electronics'?'font-bold':'font-normal'}`}
              onClick={() => setCategoryFilter("electronics")}
              
            >
              Electronics
            </button>
          </div>

          {/*rating filter div */}
          <div className="space-y-2">
            <h1 className="font-bold text">Filter by Rating</h1>

            {/* 4+half star div */}
            <div
              className="flex flex-row items-center"
              onClick={() => setRatingFilter(4.5)}
            >
              <RateFilter img={fourHStar} minRate="4.5"
             />
            </div>

            {/* 4 star div */}
            <div
              className="flex flex-row items-center"
              onClick={() => setRatingFilter(4.0)}
            >
              <RateFilter img={fourStar} minRate="4.0" />
            </div>

            {/* 3+half star div */}
            <div
              className="flex flex-row items-center"
              onClick={() => setRatingFilter(3.5)}
            >
              <RateFilter img={threeHStar} minRate="3.5" />
            </div>

            {/* 3 star div */}
            <div
              className="flex flex-row items-center"
              onClick={() => setRatingFilter(3.0)}
            >
              <RateFilter img={threeStar} minRate="3.0" />
            </div>

            {ratingFilter!==undefined? (
              <div onClick={() => setRatingFilter(undefined)}>
              <button className="text-xs bg-orange-500 text-white px-2 rounded-md py-0.5 font-bold">Clear Rating</button>
            </div>
             ) :
             (<></>) }
          
            
          
          
          
          </div>

          

          {/* Pricing Filter */}

          <div>
            <form
              className="flex flex-row space-x-2"
              // onSubmit={() => {
              //   console.log();
              // }}
            >
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Min Price
              </label>
              <input
                value={priceVal.minInput}
                type="number"
                min="0"
                name="minInput"
                onChange={priceFunc}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              />

              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max Price
              </label>
              <input
                value={priceVal.maxInput}
                type="number"
                name="maxInput"
                onChange={priceFunc}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              />

              {/* <button
                type="submit"
                className={`bg-orange-500 px-5 py-2.5 text-xs rounded-full text-white font-medium`}
              >
                {">"}
              </button> */}
            </form>
            {/* 
            {errorFlag===true ? (
              <h1 className="text-red-600 bg-red-300 px-2 my-2">
                Illogical Values Entered!
              </h1>
            ) : (
              <></>
            )} */}
          </div>
        </div>

        {/*Right Div for Search and Grid */}
        <div className="bg-purple-0 w-[75%]">
          
          {/*Search Bar */}
          <div>
            <form className="flex items-center px-10" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>

              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                  onChange={(event) => setSearchInput(event.target.value)}
                />
              </div>

            </form>
          </div>


          <div className="grid grid-cols-3 gap-y-2 gap-x-2 my-10 mx-10">
            {filteredData.map((elem, idx) => {
              return (
                <div key={idx}>
                  <ProductCard
                    img={elem.image}
                    title={elem.title}
                    price={elem.price}
                    category={elem.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <RecomndProduct data={props.data} />
      </div>
    </>
  );
}

