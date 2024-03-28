import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
        console.log('User is logged in!');
    };

    const logout = () => {
        setIsAuthenticated(false);
        console.log('User is logged out');
    };

    const authContextValue = {
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};