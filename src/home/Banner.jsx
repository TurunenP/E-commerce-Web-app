import React, { useState } from 'react';
import productData from "../products.json"
import { Link } from 'react-router-dom'; 
import Category from '../components/Category';


const title = (
  <h2>Search Your One From<span>Thousands </span>of Products</h2>
)

const desc = "We are the largest Collection of products"

const bannerList = [
  {
  iconName: "icofont-users-alt-4",
  text: "1.5 Million Customers",
  },
  {
  iconName: "icofont-notification",
  text: "More then 2000 Marchent",
  },
  {
  iconName: "icofont-globe",
  text: "Buy Anything Online",
  },
  ];
  
const Banner = () => {

  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);
  //console.log(productData)

  //filtering functionality
  const handleSearch = e => {
    //console.log(e.target.value)
    const searchTerm = e.target.value;
    setSearchInput(searchTerm)

    //Filtering products based on search

    const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setFilterProducts(filtered);
  }

  return (
    <div className='banner-section style-4'>
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <Category select={"all"}/>
           {/* <selectedCategory select={"all"}/> */}
            <selectedCategory/>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search your product'
              value={searchInput}
              onChange={handleSearch}
             />
              <button type='submit'>
              <i className="icofont-search"></i>
              </button>
              
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
            {searchInput && filterProducts.map((product, i) => (
              <li key={i}>
                {/* Interpolation of Link to attribute */}
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Banner