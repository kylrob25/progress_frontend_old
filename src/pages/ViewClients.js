import './ViewClients.css';
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ViewClients = () => {
    const [trainers, setTrainers] = useState([]);

    const fetchTrainers = async() => {
        const response = await fetch('http://localhost:8080/api/trainers')
        const data = await response.json()
        setTrainers(data)
    }

    const viewTrainerButton = (clientId) => {
        alert("TODO")
    }

    useEffect(() => {
        fetchTrainers().catch((err) => {
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
                {trainers.map((trainer) => (
                    <tr key={trainer.id}>
                        <td>{trainer.id}</td>
                        <td>{trainer.forename}</td>
                        <td>{trainer.surname}</td>
                        <td>{trainer.email}</td>
                        <td>
                            <Button variant="primary" onClick={() => viewTrainerButton(trainer.id)}>View</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewClients;