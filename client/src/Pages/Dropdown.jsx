import React, { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className={classes["dropdown"]}>
      <select
        className={classes["dropdown-select"]}
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Sort by</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
