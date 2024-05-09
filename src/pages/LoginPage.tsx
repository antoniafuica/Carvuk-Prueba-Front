import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext'; 
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import {Link} from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useUserContext();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.session) {
                setUser({ email: data.session.user.email, id: data.session.user.id });
            }
        } catch (error) {
            console.error('Error al intentar iniciar sesión ->', error);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f4f6f8">
            <Paper elevation={3} style={{ padding: 32, width: 400 }}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Hola de nuevo 👋
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Correo electrónico"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
                        Iniciar sesión
                    </Button>
                    <Typography variant="body2" style={{ marginTop: 16, textAlign: 'center' }}>
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>.
                </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default LoginPage;
