import React, { useState } from "react";

const ColorChooser = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onSelectColor(color);
  };

  return (
    <div>
      {colors.map((color, index) => (
        <button
          key={index}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            margin: "5px",
            border: "none",
          }}
          onClick={() => handleColorClick(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorChooser;
