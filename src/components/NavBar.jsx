import React from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  return (
      <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>Banana Security</h3>
          </span>
        </Link>

        <div>
          {isAuthenticated ? (
              <button type="button" onClick={logout}>
                Log out
              </button>
          ) : (
              <>
                <button type="button" onClick={() => navigate('/signin')}>
                  Log in
                </button>
                <button type="button" onClick={() => navigate('/signup')}>
                  Register
                </button>
              </>
          )}
        </div>
      </nav>
  );
}

export default NavBar;