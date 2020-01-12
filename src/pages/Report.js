import React from "react";
import '../styles.css'
import Icon from "../Atoms/Icon";
import org from "../utils/org";

const Report = ({ toggleShowReport }) => {

    const summary = org.summarize();
    return (
        <div className="report">
            <Icon fa="long-arrow-alt-left" color="black" onClick={toggleShowReport}/>
            <h1>Report</h1>
            <div className="box">

            </div>
        </div>);
};
export default Report;
