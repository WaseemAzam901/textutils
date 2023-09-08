import React from "react";

export default function ColorPalette({ colors, handleColorChange }) {
  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        ></div>
      ))}
    </div>
  );
}