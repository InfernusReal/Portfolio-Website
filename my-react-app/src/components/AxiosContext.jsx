import axios from 'axios';
import React, { createContext, useContext } from 'react';

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const axiosInstance = axios.create({
    baseURL: 'https://infernusreal/api', // Your backend base URL
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false, // set to true if you use cookies/auth in future
  });

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);