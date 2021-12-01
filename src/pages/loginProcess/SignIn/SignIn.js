import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
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
            <div>
                <h1 className="mb-5 mt-3 text-secondary">SignIn Form</h1>
                <form>
                    <input className="signin-input" type="email" name="email" id="" placeholder="Enter email" />
                    <br />
                    <input className="signin-input" type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input className="signin-btn" type="submit" value="signin" />
                </form>

                <div>------------- or -------------</div>
                <div>
                    <p>You have no account? <Link to="/signUp">Create New Account</Link></p>
                    <button onClick={handleSignInGoogle} className="signin-btn"><i class="fab fa-google"></i> Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;