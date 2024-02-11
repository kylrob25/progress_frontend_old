import './App.css';
import { useEffect, useState } from "react";

const App = () => {
    const [trainers, setTrainers] = useState([]);

    const fetchTrainers = async() => {
        const response = await fetch('http://localhost:8080/api/trainers')
        const data = await response.json()
        setTrainers(data)
    }

    useEffect(() => {
        fetchTrainers().catch((err) => {
            console.log(err.message)
        })
    }, []);

    return (
        <div className="trainers">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Forename</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {trainers.map((trainer) => (
                    <tr key={trainer.id}>
                        <td>{trainer.id}</td>
                        <td>{trainer.forename}</td>
                        <td>{trainer.surname}</td>
                        <td>{trainer.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;