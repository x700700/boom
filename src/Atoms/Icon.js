import React from "react";
import "./Atoms.css";


const Icon = ({ fa, color, onClick, hide, rotate }) => {
    const styleIcon = {
        color: color || 'inherit',
        visibility: hide ? 'hidden' : 'visible',
        cursor: hide ? 'default' : 'pointer',
        transform: rotate ? 'rotateX(180deg)' : 'rotateX(0deg)',
    };
    return (
        <div className="icon-btn">
            <i className={`fas fa-${fa} fa-icon`} style={styleIcon} onClick={onClick}/>
        </div>
    );
};
export default Icon;
