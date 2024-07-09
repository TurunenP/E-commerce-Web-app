// import React from 'react';

// const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
//   const pageNumbers = [];

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   // Generate page numbers
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   // Calculate item range for current page
//   const indexOfLastProduct = Math.min(activePage * productsPerPage, totalProducts);
//   const indexOfFirstProduct = Math.min((activePage - 1) * productsPerPage + 1, totalProducts);
//   const itemRange = `${indexOfFirstProduct} - ${indexOfLastProduct}`;

//   return (
//     <nav>
//       <ul className="pagination">
//         {/* Left arrow button */}
//         <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
//           <button className="page-link" onClick={() => paginate(activePage - 1)}>
//             &laquo;
//           </button>
//         </li>
//         {/* Page numbers */}
//         {pageNumbers.map((number) => (
//           <li key={number} className={`page-item ${number === activePage ? 'active' : ''}`}>
//             <button onClick={() => paginate(number)} className="page-link">
//               {number}
//             </button>
//           </li>
//         ))}
//         {/* Right arrow button */}
//         <li className={`page-item ${activePage === totalPages ? 'disabled' : ''}`}>
//           <button className="page-link" onClick={() => paginate(activePage + 1)}>
//             &raquo;
//           </button>
//         </li>
//       </ul>
//       {/* Display item range */}
//       <p>Showing {itemRange} out of {totalProducts} Results</p>
//     </nav>
//   );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
  const pageNumbers = [];

  // Generate page numbers
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage);
   i++) 
   {
    pageNumbers.push(i);
  }  

  // Calculate item range for current page
  const indexOfLastProduct = Math.min(activePage * productsPerPage, totalProducts);
  const indexOfFirstProduct = Math.min((activePage - 1) * productsPerPage + 1, totalProducts);
  const itemRange = `${indexOfFirstProduct} - ${indexOfLastProduct}`;

  return (
    <ul className="default-pagination lab-ul">
    <li>
      <a href='#' onClick={()=>{
        if (activePage < pageNumbers.length) {
          paginate(activePage - 1)
        }
      }}>
      <li className='icofont-rounded-left'></li>
      </a>
    </li>
      {/* Left arrow button */}
      {pageNumbers.map(number => (
        <li key={number} className={`page-item ${number === activePage ? 'bg-warning' : ''}`}>
          <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
        </li>
      ))}
      <li>
      <a href='#' onClick={()=>{
        if (activePage < pageNumbers.length) {
          paginate(activePage + 1)
        }
      }}>
      <li className='icofont-rounded-right'></li>
      </a>
    </li>
    </ul>
  );
};

export default Pagination;
