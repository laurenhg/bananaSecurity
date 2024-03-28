import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SignIn() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        login();
        console.log('User is logged in!');
        navigate('/profile');
    };

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <p>*invoervelden*</p>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;