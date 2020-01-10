import React, { useCallback, useState, useEffect } from "react";
import "./styles.css";
import org from "./utils/org";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { getAllOrg, updateEmp } from "./utils/api";

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
            await updateEmp(id, data);
            org.update(id, data);
            setVps([...org.vps]);
        } catch (e) {
            console.error('error on update - ', e);
            setVps([...org.vps]); // To override rejected changes
        }
    };
    const add = id => {
        org.add(id);
        setVps([...org.vps]);
    };

    const [data, setData] = useState("");
    const load = useCallback(async () => {
        let resp;
        try {
            resp = await getAllOrg();
            setData(resp);
            org.build(Object.values(resp.users)); // Todo - DB structure was modified from array to Object on bad update (id instead of #)
            setVps(org.vps);
        } catch (e) {
            console.error('error on loading org - ', e);
        }
    }, [setData, setVps]);

    useEffect(() => {
        console.log("Main mounted");
        load();
    }, [load]);

    return (
        <div className="App">
            {user ? (
                <Login data={data} onLogin={onLogin}/>
            ) : (
                <Main vps={vps} add={add} toggleFold={toggleFold} update={update}/>
            )}
        </div>
    );
}
