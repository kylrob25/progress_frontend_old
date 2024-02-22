import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {Card, CardContent, Typography, Grid, TextField, FormControl, Box} from '@material-ui/core';
import { Button } from "react-bootstrap";
import axios from "axios";

const EditUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        forename: '',
        surname: '',
        email: '',
        roles: []
    });

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRoleChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        setUser(prevState => ({
            ...prevState,
            roles: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/user/${userId}`, user);
            navigate(`/admin/view-user/${userId}`);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card>
                    <CardContent>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h5">
                                    Edit User
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="danger" onClick={() => navigate(`/admin/view-user/${userId}`)}>
                                    Back
                                </Button>
                            </Grid>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                disabled
                            />
                            <TextField
                                label="Forename"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="forename"
                                value={user.forename}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Surname"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="surname"
                                value={user.surname}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="primary">Save Changes</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default EditUser;
