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

    // Define the register function before using it in the authContextValue
    const register = (email, password) => {
        console.log(`Registering user with email: ${email} and password: ${password}`);
        setIsAuthenticated(true);
        console.log('User is logged in after registration');
    };

    // Now that register is defined, it can be used here
    const authContextValue = {
        isAuthenticated,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};