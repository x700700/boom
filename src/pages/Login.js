import React, {useRef, useState} from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import encode from "../utils/cryptolib";

const _email = "kameron.tedesco@tron.io";
const _pass = "q;):Q2_v";

const Login = ({ data, onLogin }) => {
    const [error, setError] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        setError(null);
        const email = refEmail.current.value();
        const pass = refPass.current.value();
        console.warn("submit - ", email, pass);
        if (!email || !pass) {
            console.error("both fields required");
            setError('Both fields are required');
        } else {
            const secret = encode(email, pass);
            console.log("secret = ", secret);
            const userId = data.secrets[secret];
            console.log("user id = ", userId);
            if (!userId) {
                console.error("secret was not found");
                setError('Wrong email or password')
            } else {
                const user = data.users.find(x => x.id === userId);
                console.log("user found = ", user);
                if (!user) {
                    console.error("no user found for userId =", userId);
                    setError('User was not found')
                } else {
                    onLogin(user);
                }
            }
        }
    };

    const refEmail = useRef();
    const refPass = useRef();
    return (
        <div className="login-page">
            {data && (
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
