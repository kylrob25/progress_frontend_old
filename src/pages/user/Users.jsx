import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {Link} from 'react-router-dom';
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user')
            setUsers(response.data)
        } catch (error) {
            console.error("Failed to fetch users:", error)
        }
    };

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8080/api/user/${userId}`)
            .then((response) => {
                alert("Deleted user: $(userId)")
                fetchUsers() // Refresh users
            })
            .catch((error) => {
                console.error("Failed to delete user:", error);
            });
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <>
            <Button as={Link} to={`/admin/create`} variant="primary">Create</Button>
            <div className="table">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.forename}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button as={Link} to={`/admin/user/${user.id}`} variant="primary" className="me-2">View</Button>
                                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Users;