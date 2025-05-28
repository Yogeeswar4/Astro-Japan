import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const updateUser = (name) => {
    setUsername(name);
    localStorage.setItem('username', name);
  };

  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <UserContext.Provider value={{ username, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
