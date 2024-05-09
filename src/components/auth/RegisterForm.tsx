import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';

interface RegisterFormProps {
    handleRegister: (email: string, password: string, firstName: string, lastName: string, phone: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ handleRegister }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleRegister(email, password, firstName, lastName, phone);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                break;
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f4f6f8">
            <Paper elevation={3} style={{ padding: 32, width: 400, maxWidth: '100%' }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    ¡Regístrate ahora!
                </Typography>
                <form onSubmit={onSubmit} noValidate>
                    <TextField
                        name="email"
                        label="Correo electrónico"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        label="Contraseña"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        name="firstName"
                        label="Nombre"
                        fullWidth
                        variant="outlined"
                        value={firstName}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        name="lastName"
                        label="Apellido"
                        fullWidth
                        variant="outlined"
                        value={lastName}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        name="phone"
                        label="Teléfono"
                        fullWidth
                        variant="outlined"
                        value={phone}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
                        Registrarse
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default RegisterForm;
