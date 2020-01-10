import React, {useRef} from "react";
import Input from "../Atoms/Input";
import Icon from "../Atoms/Icon";

const EmpDetails = ({ emp, toggleFold, add, update }) => {

    const toggle = () => {
        toggleFold(emp.id);
    };
    const addEmp = () => {
        add && add(emp.id);
    };
    const save = () => {
        update(emp.id, {
            firstName: refFirstName.current.value(),
            lastName: refLastName.current.value(),
        });
    };

    const refFirstName = useRef();
    const refLastName = useRef();
    return (
        <div className="emp-details">
            <Icon fa="sort-down" hide={!emp.emps.length} rotate={emp.fold} onClick={toggle}/>
            <Input ref={refFirstName} defaultValue={emp.firstName}/>
            <Input ref={refLastName} defaultValue={emp.lastName}/>
            <Icon fa="plus-square" color="blue" onClick={addEmp}/>
            <Icon fa="save" color="green" onClick={save}/>
            <Icon fa="trash-alt" color="red"/>
        </div>
    );
};
export default EmpDetails;
