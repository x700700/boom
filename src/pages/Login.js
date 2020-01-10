import React, { useRef } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import encode from "../utils/cryptolib";

const _email = "kameron.tedesco@tron.io";
const _pass = "q;):Q2_v";

const Login = ({ data, onLogin }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const email = refEmail.current.value();
    const pass = refPass.current.value();
    console.warn("submit - ", email, pass);
    if (!email || !pass) {
      console.error("both fields required");
    } else {
      const secret = encode(email, pass);
      console.log("secret = ", secret);
      const userId = data.secrets[secret];
      console.log("user id = ", userId);
      if (!userId) {
        console.error("secret was not found");
      } else {
        const user = data.users.find(x => x.id === userId);
        console.log("user found = ", user);
        if (!user) {
          console.error("no user found for userId =", userId);
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
        <div className="box">
          <div className="title">Please login</div>
          <form onSubmit={handleSubmit}>
            <Input ref={refEmail} label="email address" defaultValue={_email} />
            <Input ref={refPass} label="password" type="password" defaultValue={_pass} />
            <Button label="Login" />
          </form>
        </div>
      )}
    </div>
  );
};
export default Login;
