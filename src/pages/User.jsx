import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {Button} from "react-bootstrap";

const ViewUser = () => {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [trainer, setTrainer] = useState(null)
    const [isTrainer, setIsTrainer] = useState(false)

    const fetchUser = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/user/' + userId)
            const data = await response.json()

            setUser(data)

            if (data.roles.includes('TRAINER')) {
                fetchTrainer()
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const fetchTrainer = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/trainer/user/' + userId)
            const data = await response.json()

            setTrainer(data)
            setIsTrainer(true)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    useEffect(() => {
        if (trainer) {
            setIsTrainer(true)
        }
    }, [trainer]);

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {user.username}
                        </Typography>
                        <Typography variant="body1">
                            Name: {user.forename} {user.surname}
                        </Typography>
                        <Typography variant="body1">
                            Email: {user.email}
                        </Typography>
                        <Typography variant="body1">
                            Roles: {user.roles.join(', ')}
                        </Typography>

                        {
                            isTrainer && (
                                <>
                                    <Button as={Link} to={`/trainer/${trainer.username}`} variant="primary">View Trainer</Button>
                                </>
                            )
                        }
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ViewUser;