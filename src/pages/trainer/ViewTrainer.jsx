import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, CardMedia, Container } from '@material-ui/core';

const ViewTrainer = () => {
    const { username } = useParams();
    const [trainer, setTrainer] = useState(null);

    const fetchUser = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/trainer/' + username);
            const data = await response.json();

            setTrainer(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!trainer) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={{ marginTop: '64px', padding: '20px' }}>
            <Grid container justify="center" style={{ maxWidth: '100%', margin: '0 auto' }}>
                <Grid item xs={12} md={8} lg={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            style={{ height: '200px', objectFit: 'cover' }}
                            image={trainer.pictureUrl}
                            alt={trainer.username}
                        />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {trainer.username}
                            </Typography>

                            <Typography variant="body1">
                                Cost: £{trainer.cost}
                            </Typography>

                            <Typography variant="body1">
                                Location: {trainer.location}
                            </Typography>

                            <Typography variant="body1">
                                Specialization: {trainer.specialization}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ViewTrainer;
