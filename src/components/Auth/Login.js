import { useState } from 'react';
import './Login.scss';
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        alert("log in")
    }
    return (
        <div className="login-container">
            <div className='header'>
                Don't have an account yet?
            </div>
            <div className='title col-4 mx-auto'>
                Store Cuong
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello,Who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>
                <span className='forgot-password'>Forgot Password?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                    >Log In to Store</button>
                </div>
            </div>

        </div>
    )
}
export default Login;   