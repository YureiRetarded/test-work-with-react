import React from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type="text" placeholder="Type your login"/>
                <MyInput type="password" placeholder="Type your password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;