import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import {Card, CardContent, Typography, Grid, CardMedia} from '@material-ui/core';
import {Button} from "react-bootstrap";

const ViewTrainer = () => {
    const { username } = useParams()
    const [trainer, setTrainer] = useState(null)

    const fetchUser = async() => {
        try {
            const response = await fetch('http://localhost:8080/api/trainer/' + username)
            const data = await response.json()

            setTrainer(data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchUser()
    }, []);

    if (!trainer) {
        return <div>Loading...</div>
    }

    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card>
                    <CardMedia
                        component="img"
                        height="200"
                        image={trainer.pictureUrl}
                        alt={trainer.username}
                        style={{objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {trainer.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ViewTrainer;