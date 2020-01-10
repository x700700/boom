import React from "react";
import Input from "../Atoms/Input";
import Icon from "../Atoms/Icon";

const EmpDetails = ({ emp, toggleFold, addEmp }) => {

    const toggle = () => {
        toggleFold(emp.id);
    };
    const add = () => {
        addEmp(emp.id);
    };

    return (
        <div className="emp-details">
            <Icon fa="sort-down" hide={!emp.emps.length} rotate={emp.fold} onClick={toggle}/>
            <Input defaultValue={emp.firstName}/>
            <Input defaultValue={emp.lastName}/>
            <Icon fa="plus-square" color="blue" onClick={add}/>
            <Icon fa="save" color="green"/>
            <Icon fa="trash-alt" color="red"/>
        </div>
    );
};
export default EmpDetails;
