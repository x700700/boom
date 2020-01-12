import React from "react";
import "../styles.css"
import Emp from "./Emp";
import Icon from "../Atoms/Icon";

const Main = (props) => {
    const { user, vps, add, logout, toggleShowReport } = props;

    return (
        <div>
            <h1>Organization</h1>
            {vps && (
                <div>
                    <div className="tree-actions">
                        <Icon fa="chart-bar" color="orange" onClick={toggleShowReport}/>
                        <Icon fa="plus-square" color="blue" onClick={() => add(null)}/>
                    </div>
                    {vps.map(emp => (
                        <div key={emp.id}>
                            <Emp {...props} emp={emp} />
                        </div>
                    ))}
                </div>
            )}
            <div className="user-details-box">
                <div>
                    <span style={{ color: '#666' }}>Hello </span>
                    <span style={{ fontWeight: 500 }}>{(user || {}).email}</span>
                </div>
                <div className="btn" onClick={logout}>Logout</div>
            </div>
        </div>
    );
};
export default Main;
