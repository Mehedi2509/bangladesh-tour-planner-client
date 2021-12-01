import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { signInGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.from || '/';

    const handleSignInGoogle = () => {
        signInGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })

    }

    return (
        <div className="signin-form">
            <h1 className="mt-3 mb-5 text-secondary">Create New Account</h1>
            <div>
                <form>
                    <input className="signin-input" type="text" id="" placeholder="Enter your name" />
                    <br />
                    <input className="signin-input" type="email" name="email" id="" placeholder="Enter email" />
                    <br />
                    <input className="signin-input" type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input className="signin-btn" type="submit" value="Register" />
                </form>

                <div>---------------- or ---------------</div>
                <div>
                    <p>Already have an account? <Link to="/signIn">Sign In</Link></p>
                    <button onClick={handleSignInGoogle} className="signin-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;