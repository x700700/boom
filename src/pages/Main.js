import React from "react";
import Emp from "./Emp";
import Icon from "../Atoms/Icon";

const Main = ({ vps, toggleFold, addEmp }) => {
  return (
    <div>
      <h1>Organization</h1>
      {vps && (
        <div>
          <Icon fa="plus-square" color="blue" onClick={() => addEmp(null)} />
          {vps.map(emp => (
            <div key={emp.id}>
              <Emp emp={emp} toggleFold={toggleFold} addEmp={addEmp} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Main;
