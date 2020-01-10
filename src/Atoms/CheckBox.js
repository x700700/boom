import React from "react";
import "./Atoms.css";

const Checkbox = ({ selected, label, onChange }) => {
    return (
        <div>
            <div className="checkbox" onClick={() => onChange(!selected)}/>
            <div className="label">{label}</div>
        </div>
    )
};
export default Checkbox;
