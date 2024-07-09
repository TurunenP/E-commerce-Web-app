//ShopCategory

import React from "react";
import Data from "../products.json";

const ShopCategory = ({
  filterItem,
  menuItems,
  SelectedCategory,
  setProducts,
}) => {
  // Function to handle clicking the "All" button
  const handleAllClick = () => {
    filterItem("All"); 
    setProducts(Data); 
  };

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={handleAllClick} 
          className={`m-2 ${SelectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>

        {/* <button 
        onClick={() => setProducts(Data)} 
        className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>
        All
        </button>    */}
        {menuItems.map((Val, id) => {
          return (
            <button
            className={`m-2 ${SelectedCategory === Val ? "bg-warning" : ""}`}
            key={id}
            onClick={() => filterItem(Val)}
          >
            {Val}
          </button>
          )
        }
          )}
      </div>
    </>
  );
};

export default ShopCategory;
