import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Container,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const CreateUser = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios
            .post("http://localhost:8080/api/user", data)
            .then((response) => {
                navigate("/admin/user");
            })
            .catch((error) => {
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h1" gutterBottom>
                Create User
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register("username", { required: true })}
                    label="Username"
                    variant="outlined"
                    error={errors.username ? true : false}
                    helperText={errors.forename ? 'Username is required' : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    {...register("forename", { required: true })}
                    label="Forename"
                    variant="outlined"
                    error={errors.forename ? true : false}
                    helperText={errors.forename ? 'Forename is required' : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    {...register("surname", { required: true })}
                    label="Surname"
                    variant="outlined"
                    error={errors.surname ? true : false}
                    helperText={errors.surname ? 'Surname is required' : ''}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    label="Email"
                    variant="outlined"
                    type="email"
                    error={errors.email ? true : false}
                    helperText={errors.email ? 'Invalid email address' : ''}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Create User
                </Button>
            </form>
        </Container>
    );
};

export default CreateUser;