import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Atoms.css";

const Input = forwardRef(({ label, type = 'text', width = '7rem', defaultValue = '', onChange }, ref) => {
    const [value, setValue] = useState(defaultValue);
    useImperativeHandle(ref, () => ({
        value() {
            return value;
        }
    }));
    const handleChange = e => {
        setValue(e.target.value);
        onChange && onChange();
    };

    const styleInput = {
        width: width,
    };
    return (
        <div className="my-input">
            {label &&
            <label>{label}:</label>
            }
            <input autoComplete="off" type={type} value={value} onChange={handleChange} style={styleInput}/>
        </div>
    );
});
export default Input;
