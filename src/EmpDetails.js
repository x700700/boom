import React from "react";
import Input from "./Atoms/Input";
import Icon from "./Atoms/Icon";

const EmpDetails = ({ emp, addEmp }) => {

  const add = () => {
    addEmp(emp.id);
  }
  return (
    <div className="emp-details">
      <Input defaultValue={emp.firstName} />
      <Input defaultValue={emp.lastName} />
      <Icon fa="plus-square" color="blue" onClick={add} />
      <Icon fa="save" color="green" />
      <Icon fa="trash-alt" color="red" />
    </div>
  );
};
export default EmpDetails;
