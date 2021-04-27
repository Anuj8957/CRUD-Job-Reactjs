import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {  useParams } from "react-router-dom";

const EditUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        names: "",
        email: "",
        username: "",
        phone: "",
        website: ""
    });
    const { names, username, email, phone, website } = user;
      useEffect(() => {
        LoadUser();
      }, []);
      const LoadUser =async ()=>{
          const result = await axios.get(`http://localhost:3003/users/${id}`);
          setUser(result.data);
      }
    return (
        <div className="container">
            <h3>View User: {names}</h3>
            <div className="p-4">
            <form>
                <div className="mb-3">
                    <li  type="text" className="list-group-item" >Name: {names} </li>
                 </div>      
                <div className="mb-3">
                    <li  type="text" className="list-group-item">UserName: {username}</li>
                </div>
                <div className="mb-3">
                    <li  type="text" className="list-group-item">Email: {email}</li>
                </div>
                <div className="mb-3">
                    <li  type="text" className="list-group-item">Phone: {phone}</li>
                </div>
                <div className="mb-3">
                    <li  type="text" className="list-group-item" >Website: {website}</li>
                </div>
            </form>
            </div>
        </div>
    );
};

export default EditUser;