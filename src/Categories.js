import React from 'react';

//get function and array from props
//and w/ .map() dynamically create filtering btns also while making them we adding functionality to them
const Categories = ({filterItems,categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((ctg,idx) => {
        return <button 
        className='filter-btn' 
        key={idx} 
        onClick={() => filterItems(ctg)}>
          {ctg}
        </button>
      })}
    </div>
  )
};

export default Categories;
