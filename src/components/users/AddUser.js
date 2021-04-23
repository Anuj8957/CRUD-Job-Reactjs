import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        names: "",
        email: "",
        username: "",
        phone: "",
        website: ""
    });
    const { names, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
      };
    return (
        <div className="container">
            <h3>Add User</h3>
            <div className="border shadow p-4">
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="names" value={names} onChange={e => onInputChange(e)}/>
                 </div>      
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={e => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={e => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={phone} onChange={e => onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" name="website" value={website} onChange={e => onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default AddUser;