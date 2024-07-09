// import React, { useState } from "react";
// import PageHeader from "../components/PageHeader";
// import Data from "../products.json";
// import ProductCard from "./ProductCard";
// import Pagination from "./Pagination";
// import Search from "./Search";
// import ShopCategory from "./ShopCategory";

// const ShopResults = "Showing 01 - 12 out of 139 Results";

// const Shop = () => {
//   const [GridList, setGridList] = useState(true);
//   const [products, setproducts] = useState(Data);
//   //console.log(products)

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );

//   // Function to change the current page
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Category filter products
//    const [selectedCategory, setselectedCategory] = useState("All");
//    const menuItems = [...new Set(Data.map((Val)=> Val.category))];

//    const filterItem = (curcat) => {
//     const newItem = Data.filter((newVal) => {
//       return newVal.category === curcat;
//     })
//     setCurrentPage(curcat);
//     setproducts(newItem);
//    };

//   return (
//     <div>
//       <PageHeader title="Our Shop Page" curPage="Shop" />
//       <div className="shop-page padding-tb">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-12">
//               <article>
//                 <div className="shop-title d-flex flex-wrap justify-content-between">
//                   <p>{ShopResults}</p>
//                   <div
//                     className={`product-viewmode ${
//                       GridList ? "GridActive" : "listActive"
//                     }`}
//                   >
//                     <a className="grid" onClick={() => setGridList(!GridList)}>
//                       <i className="icofont-ghost"></i>
//                     </a>
//                     <a className="list" onClick={() => setGridList(!GridList)}>
//                       <i className="icofont-listine-dots"></i>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="div">
//                   <ProductCard GridList={GridList} products={currentProducts} />
//                 </div>
//                 <Pagination
//                   productsPerPage={productsPerPage}
//                   totalProducts={products.length}
//                   paginate={paginate}
//                   activePage={currentPage}
//                 />
//               </article>
//             </div>
//             <div className="col-lg-4 col-12">
//               <aside>
//                 <Search products={products} GridList={GridList} />
//                 <ShopCategory
//                   filterItem={filterItem}
//                   setItem={setproducts}
//                   menuItems={menuItems}
//                   setproducts={setproducts}
//                   selectedCategory={selectedCategory}
//                 />
//               </aside>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;


// Shop.jsx

import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const ShopResults = "Showing 01 - 12 out of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
 //console.log(products)
 
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Category filter products
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((item) => item.category))];

  const filterItem = (category) => {
    setSelectedCategory(category); // Update selected category

    // Filter products based on the selected category
    if (category === "All") {
      setProducts(Data); // Show all products
    } else {
      const filteredProducts = Data.filter((item) => item.category === category);
      setProducts(filteredProducts); // Show products for the selected category
    }

    // Reset pagination to first page
    setCurrentPage(1);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <aside>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{ShopResults}</p>
                  {/* Product view mode buttons */}
                </div>
                <div className="div">
                  <ProductCard GridList={GridList} products={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </aside>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  menuItems={menuItems}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
