import React, {useRef, useState} from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import encode from "../utils/cryptolib";

const _email = "kameron.tedesco@tron.io";
const _pass = "q;):Q2_v";

const Login = ({ secrets, users, onLogin }) => {
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        setError(null);
        const email = refEmail.current.value();
        const pass = refPass.current.value();
        console.warn("submit - ", email, pass);
        try {
            if (!email || !pass) throw new Error('Both fields are required');
            const secret = encode(email, pass);
            console.log("secret = ", secret);
            const userId = secrets[secret];
            console.log("user id = ", userId);
            if (!userId) throw new Error('Wrong email or password');
            const user = users.find(x => x.id === userId);
            console.log("user found = ", user);
            if (!user) throw new Error('User was not found');
            onLogin(user);
        } catch (e) {
            console.error(e.message);
            setError(e.message);
        }
    };

    const refEmail = useRef();
    const refPass = useRef();
    return (
        <div className="login-page">
            {secrets && (
                <div className="container">
                    <div className="title">Please login</div>
                    <div className="box">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <Input ref={refEmail} label="email address" width="13rem" defaultValue={_email}/>
                            <Input ref={refPass} label="password" type="password" width="13rem" defaultValue={_pass}/>
                            <Button label="Login"/>
                        </form>
                        <div className="error-msg">
                            {error}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Login;
