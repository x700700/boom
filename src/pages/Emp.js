import React from "react";
import EmpDetails from "./EmpDetails";
import org from '../utils/org';

const Emp = (props) => {
    const { level = 0, emp } = props;
    const styleEmp = {
        marginLeft: `${level * 2}rem`,
    };
    const styleEmpsBox = {
        maxHeight: emp.expand ? `${org.getSize(emp.emps) * 4}rem` : '0',
    };
    return (
        <div className="emp-node">
            <div style={styleEmp}>
                <EmpDetails {...props} />
            </div>
            {emp.emps.length > 0 &&
            <div className="emp-emps-box" style={styleEmpsBox}>
                {emp.emps.map(x => (
                    <Emp {...props} key={x.id} emp={x} level={level + 1} />
                ))}
            </div>
            }
        </div>
    );
};
export default Emp;
