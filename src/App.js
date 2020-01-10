import React, { useCallback, useState, useEffect } from "react";
import "./styles.css";
import { myFetch } from "./utils/myFetch";
import org from "./utils/org";
import Login from "./pages/Login";
import Main from "./pages/Main";

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
    const addEmp = id => {
        console.warn("add under - ", id);
        org.add(id);
        setVps([...org.vps]);
    };

    const [data, setData] = useState("");
    const load = useCallback(async () => {
        const resp = await myFetch("");
        setData(resp);
        org.build(resp.users);
        setVps(org.vps);
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
                <Main vps={vps} addEmp={addEmp} toggleFold={toggleFold}/>
            )}
        </div>
    );
}
