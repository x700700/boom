import React from "react";
import EmpDetails from "./EmpDetails";

const Emp = ({ emp, level = 0, addEmp}) => {
  const styleEmp = {
    marginLeft: `${level * 2}rem`,
  };
  return (
    <div>
      <div style={styleEmp}>
        <EmpDetails emp={emp} addEmp={addEmp} />
      </div>
      {/* {emp.emps && emp.emps.length > 0 && emp.emps.map(x => (
        <Emp key={x.id} emp={x} level={level + 1} addEmp={addEmp} />
      ))} */}
    </div>
  );
};
export default Emp;
