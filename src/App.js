import React, { useCallback, useState, useEffect } from "react";
import "./styles.css";
import org from "./utils/org";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { getAllOrg, addUpdateEmp } from "./utils/api";

export default function App() {
    const [user, setUser] = useState();
    const onLogin = user => {
        setUser(user);
    };

    const [vps, setVps] = useState();
    const toggleFold = id => {
        org.toggleFold(id);
        setVps([...org.vps]);
    };
    const update = async (id, data) => {
        try {
            await addUpdateEmp(org.getNum(id), data);
            org.update(id, data);
            setVps([...org.vps]);
        } catch (e) {
            console.error('error on update - ', e);
            setVps([...org.vps]); // To override rejected changes
        }
    };
    const add = async (managerId) => {
        try {
            const newEmp = org.getNew(managerId);
            await addUpdateEmp(newEmp.num, newEmp);
            org.add(managerId, newEmp);
            setVps([...org.vps]);
        } catch (e) {
            console.error('error on add - ', e);
        }
    };

    const [orgData, orgSetData] = useState('');
    const load = useCallback(async () => {
        let resp;
        try {
            resp = await getAllOrg();
            orgSetData(resp);
            org.build(Object.values(resp.users)); // Todo - DB structure was modified from array to Object on bad update (id instead of #)
            setVps(org.vps);
        } catch (e) {
            console.error('error on loading org - ', e);
        }
    }, [orgSetData, setVps]);

    useEffect(() => {
        console.log("Main mounted");
        load();
    }, [load]);

    return (
        <div className="App">
            {user ? (
                <Login data={orgData} onLogin={onLogin}/>
            ) : (
                <Main vps={vps} add={add} toggleFold={toggleFold} update={update}/>
            )}
        </div>
    );
}
