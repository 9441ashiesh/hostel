import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'user' or 'merchant'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData, type) => {
    setUser(userData);
    setUserType(type);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    userType,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
