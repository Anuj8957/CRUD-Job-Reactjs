import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async id=> {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <table className="table  border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user,index) =>(
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.names}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-primary mx-2" to={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-sm btn-outline-primary mx-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-sm btn-danger mx-2" onClick={() =>deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;