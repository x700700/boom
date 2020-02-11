import React, {useEffect} from "react";
import "./styles.css";
import {useDispatch, useSelector} from "react-redux";
import {signin} from "./redux/actions";


export default function App() {
    const dispatch = useDispatch();
    const { username } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(signin({ username: 'Street Fox' }));
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Booli Boilerplate</h1>
            <br/>
            <h3>User name: {username}</h3>
        </div>
    );
}
