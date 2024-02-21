import React, { useEffect, useState } from "react";
import {Grid, Card, CardContent, CardActions, Button, Typography, CardMedia, TextField, Box} from "@material-ui/core";
import { Link } from 'react-router-dom';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    const fetchTrainers = async () => {
        const response = await fetch('http://localhost:8080/api/trainer');
        const data = await response.json();
        setTrainers(data);
    };

    useEffect(() => {
        fetchTrainers().catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (

        <Box border={20} borderColor="grey.500" borderRadius={50} padding={50}>
            <TextField
                label="Search"
                fullWidth
                margin="dense"
            />

            <Grid container spacing={3}>
                {trainers.map((trainer) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={trainer.id}>
                        <Card style={{ width: 300, height: 300 }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={trainer.pictureUrl}
                                alt={trainer.username}
                                style={{objectFit: 'cover'}}
                            />
                            <CardContent>
                                <Typography variant="h6">{trainer.username}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={`/trainer/${trainer.username}`} variant="contained" color="primary">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Trainers;