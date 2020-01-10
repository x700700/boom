import React from "react";
import EmpDetails from "./EmpDetails";

const Emp = ({ emp, level = 0, toggleFold, addEmp}) => {
    const styleEmp = {
        marginLeft: `${level * 2}rem`,
    };
    return (
        <div>
            <div style={styleEmp}>
                <EmpDetails emp={emp} toggleFold={toggleFold} addEmp={addEmp}/>
            </div>
            {emp.fold && emp.emps.length && emp.emps.map(x => (
                <Emp key={x.id} emp={x} level={level + 1} toggleFold={toggleFold} addEmp={addEmp}/>
            ))}
        </div>
    );
};
export default Emp;
