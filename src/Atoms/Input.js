import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Atoms.css";

const Input = forwardRef(({ label, type = 'text', defaultValue = '' }, ref) => {
  const [value, setValue] = useState(defaultValue);
  useImperativeHandle(ref, () => ({
    value() {
      return value;
    }
  }));
  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="my-input">
      {label &&
      <label>{label}:</label>
      }
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
});
export default Input;
