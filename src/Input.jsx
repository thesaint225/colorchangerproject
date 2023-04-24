import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setcolorValue,
  sethexValue,
  isDarkText,
  setisDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name : </label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}
        onChange={(e) => {
          setcolorValue(e.target.value);
          sethexValue(colorNames(e.target.value));
        }}
      />
      <button type="button"
      onClick={()=>setisDarkText(!isDarkText)}
      >
        Toggle Text color

      </button>
    </form>
  );
};

export default Input;
