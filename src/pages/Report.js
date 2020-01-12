import React from "react";
import '../styles.css'
import Icon from "../Atoms/Icon";

const Report = ({ toggleShowReport }) => {
    return (
        <div className="report">
            <Icon fa="long-arrow-alt-left" color="black" onClick={toggleShowReport}/>
            <h1>Report</h1>
            <div className="box">

            </div>
        </div>);
};
export default Report;
