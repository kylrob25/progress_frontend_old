import React, { useEffect, useState } from "react";
import {Button, Container, Table} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";
import {Typography} from "@material-ui/core";

const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user');
            setUsers(response.data);
        } catch (err) {
            console.log(err.message);
            setError("Failed to fetch users. Please try again later.");
        }
    };

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8080/api/user/${userId}`)
            .then(() => {
                alert(`Deleted user: ${userId}`);
                fetchUsers();
            })
            .catch((error) => {
                console.error("Failed to delete user:", error);
                alert('Failed to detect user.')
            });
    };

    useEffect(() => {
        fetchUsers();
    }, [users]);

    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Button
                as={Link}
                to="/admin/create-user"
                variant="primary"
                style={{ marginBottom: '20px' }}>
                Create
            </Button>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Actions</th>
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
                                <Button as={Link} to={`/admin/view-user/${user.id}`} variant="primary" className="me-2">View</Button>
                                <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default ViewUsers;
