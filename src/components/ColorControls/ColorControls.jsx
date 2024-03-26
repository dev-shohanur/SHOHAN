import React, { useState } from "react";
import "./ColorControls.css";
import ColorPicker from "react-best-gradient-color-picker";
import reactCSS from "reactcss";

const ColorControls = ({ label, value, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [palette, setPalette] = useState(value);

  const handleChange = (newColor) => {
    onChange(newColor);
    setPalette(newColor);
  };

  const pickerCss = reactCSS({
    default: {
      card: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 0 6px rgb(0,0,0, .25)",
        padding: "8px",
        position: "absolute",
        left: "60px",
        top: "-200px",
        width: "295px",
        zIndex: 102,
        display: isActive ? "block" : "none",
        height: "336px",
        overflowY: "auto",
      },
    },
  });

  return (
    <div className="ColorControls">
      <span className="label">{label}</span>

      <div className="button-content">
        <button
          className="color-button"
          style={{ background: palette }}
          onClick={() => setIsActive(!isActive)}
        ></button>
        <div style={pickerCss.card}>
          <ColorPicker
            value={palette}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorControls;
