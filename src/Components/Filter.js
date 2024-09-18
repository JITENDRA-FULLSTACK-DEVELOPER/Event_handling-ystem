import React from "react";

const Filter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return <input type="date" onChange={handleChange} />;
};

export default Filter;
