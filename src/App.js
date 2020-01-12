import React, { useCallback, useState, useEffect } from "react";
import "./styles.css";
import org from "./utils/org";
import Login from "./pages/Login";
import Main from "./pages/Main";
import {addUpdateEmp, deleteEmp, getSecrets, getAllUsers, getUsersPage} from "./utils/api";

export default function App() {
    const [user, setUser] = useState();
    const onLogin = user => {
        setUser(user);
    };
    const logout = () => {
        setUser(null);
    };

    const [vps, setVps] = useState();
    const toggleFold = id => {
        org.toggleFold(id);
        setVps([...org.vps]);
    };
    const setModified = id => {
        org.setModified(id);
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
    const del = async (id) => {
        try {
            await deleteEmp(org.getNum(id));
            await org.del(id);
            setVps([...org.vps]);
        } catch (e) {
            console.error('error on delete - ', e);
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

    const [secrets, setSecrets] = useState();
    const [users, setUsers] = useState();
    const loadAuth = useCallback(async () => {
        try {
            const secrets = await getSecrets();
            setSecrets(secrets);
            const users = await getAllUsers();
            setUsers(users);
        } catch (e) {
            console.error('error on loading auth info - ', e);
        }
    }, [setSecrets, setUsers]);

    const loadOrg = useCallback(async () => {
        try {
            org.init();
            let page = 1;
            let orgPage = await getUsersPage(page++);
            while (orgPage.length > 0) {
                console.debug(`page #${page} - `, orgPage);
                org.addPage(Object.values(orgPage)); // Todo - DB structure was modified from array to Object on bad update (id instead of #)
                setVps([...org.vps]);
                orgPage = await getUsersPage(page++);
            }
        } catch (e) {
            console.error('error on loading org - ', e);
        }
    }, [setVps]);

    useEffect(() => {
        console.log("App mounted");
        loadAuth();
        loadOrg();
    }, [loadAuth, loadOrg]);

    return (
        <div className="App">
            {!user ? (
                <Login secrets={secrets} users={users} onLogin={onLogin}/>
            ) : (
                <Main user={user} logout={logout}
                      vps={vps} add={add} toggleFold={toggleFold} setModified={setModified} update={update} del={del}/>
            )}
        </div>
    );
}
