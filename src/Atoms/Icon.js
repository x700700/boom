import React from "react";
import "./Atoms.css";


const Icon = ({ fa, color, onClick }) => {
  const styleIcon = {
    color: color || 'inherit',
  };
  return (
    <div className="icon-btn">
      <i className={`fas fa-${fa}`} style={styleIcon} onClick={onClick} />
    </div>
  );
};
export default Icon;
