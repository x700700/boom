import React from "react";
import "./Atoms.css";


const Icon = ({ fa, color, onClick, hide, rotate, disable }) => {
    const styleIcon = {
        color: disable ? '#aaa' : color || 'inherit',
        visibility: hide ? 'hidden' : 'visible',
        cursor: hide || disable ? 'default' : 'pointer',
        transform: rotate ? 'rotateX(180deg)' : 'rotateX(0deg)',
        pointerEvents: disable ? 'none' : 'all',
    };
    return (
        <div className="icon-btn">
            <i className={`fas fa-${fa} fa-icon`} style={styleIcon} onClick={onClick}/>
        </div>
    );
};
export default Icon;
