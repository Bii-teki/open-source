// apiContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const APIContext = createContext();
const BASE_URL = 'http://127.0.0.1:5558';

export function useAPIContext() {
  return useContext(APIContext);
}

export function APIProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState("");

  useEffect(() => {
    // Fetch users from your Flask API endpoint
    axios.get(`${BASE_URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {
        setLoading(false);
      });

    // Fetch projects from your Flask API endpoint
    axios.get(`${BASE_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      })
      .finally(() => {
        setLoading(false);
      });

 // Fetch login from your Flask API endpoint
 axios.post(`${BASE_URL}/login`)
 .then((response) => {
   setTokens(response.data);
 })
 .catch((error) => {
   console.error('Error fetching users:', error);
 })
 .finally(() => {
   setLoading(false);
 });

  }, []);


  

  return (
    <APIContext.Provider value={{ users, projects, tokens, loading }}>
      {children}
    </APIContext.Provider>
  );
}
