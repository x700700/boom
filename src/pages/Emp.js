import React from "react";
import EmpDetails from "./EmpDetails";

const Emp = (props) => {
    const { level = 0, emp } = props;
    const styleEmp = {
        marginLeft: `${level * 2}rem`,
    };
    return (
        <div>
            <div style={styleEmp}>
                <EmpDetails {...props} />
            </div>
            {emp.fold && emp.emps.length && emp.emps.map(x => (
                <Emp {...props} key={x.id} emp={x} level={level + 1} />
            ))}
        </div>
    );
};
export default Emp;
