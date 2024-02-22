import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Button } from "react-bootstrap";
import axios from "axios";

const ViewUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [trainer, setTrainer] = useState(null);

    const fetchUser = async () => {
        try {
            const userData = await axios.get(`http://localhost:8080/api/user/${userId}`);
            setUser(userData.data);

            if (userData.data.roles && userData.data.roles.includes('TRAINER')) {
                const trainerData = await axios.get(`http://localhost:8080/api/trainer/${userData.data.username}`);
                setTrainer(trainerData.data);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card>
                    <CardContent>
                        {user.username && (
                            <Typography variant="h5" gutterBottom>
                                {user.username}
                            </Typography>
                        )}
                        {(user.forename || user.surname) && (
                            <Typography variant="body1">
                                Name: {user.forename ? user.forename : ''} {user.surname ? user.surname : ''}
                            </Typography>
                        )}
                        {user.email && (
                            <Typography variant="body1">
                                Email: {user.email}
                            </Typography>
                        )}
                        {user.roles && user.roles.length > 0 && (
                            <Typography variant="body1">
                                Roles: {user.roles.join(', ')}
                            </Typography>
                        )}

                        {trainer && (
                            <Button as={Link} to={`/trainer/${trainer.username}`} variant="primary">View Trainer Profile</Button>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ViewUser;
