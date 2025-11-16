

import axios from "axios";
import httpStatus from "http-status";
import {children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import server from "../environment"
export const AuthContext = createContext({});

const client = axios.create({
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();



const handleRegister = async (name, username, password) => {
  try {
    let request = await client.post("/register", { name, username, password });

    if (request.status === httpStatus.CREATED) {
      console.log(request);
      return request.data.message;
    }
  } catch (err) {
    throw err;
  }
};

// const data = { userData, setUserData, handleRegister, handleLogin };


  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", {
        username,
        password,
      });

      if (request.status === httpStatus.OK) {
        console.log("Login Response:", request);
        setUserData(request.data.user); // optional
        return request; //  return full response
      }
    } catch (err) {
      console.error("Login Error:", err);
      throw err;
    }
  };
 const getHistoryOfUser = async () => {
        try {
            let request = await client.get("/get_all_activity", {
                params: {
                    token: localStorage.getItem("token")
                }
            });
            return request.data
        } catch
         (err) {
            throw err;
        }
    }

    const addToHistory = async (meetingCode) => {
        try {
            let request = await client.post("/add_to_activity", {
                token: localStorage.getItem("token"),
                meeting_code: meetingCode
            });
            return request
        } catch (e) {
            throw e;
        }
    }

  const data = {
    userData,
    setUserData,
    handleRegister,
    handleLogin,
    addToHistory,
     getHistoryOfUser
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}
