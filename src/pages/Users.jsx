import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {Link} from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        const response = await fetch('http://localhost:8080/api/user')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers().catch((err) => {
            console.log(err.message)
        })
    }, []);

    return (
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
                            <Button as={Link} to={`/admin/user/${user.id}`} variant="primary">View</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Users;