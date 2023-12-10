import React, { useState } from "react";

const AddCategorys = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();
  const setInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Busca tu gif"
          value={inputValue}
          onChange={setInputChange}
        ></input>
      </form>
    </>
  );
};

export default AddCategorys;
