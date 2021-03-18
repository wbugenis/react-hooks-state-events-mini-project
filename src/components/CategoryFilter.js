import React from "react";

function CategoryFilter({categories, setFilter}) {

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }
  
  const buttons = categories.map(category => <button key={category} onClick={handleFilter} value={category}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
