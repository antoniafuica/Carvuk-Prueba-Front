import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface Servicio {
    id: string;
    nombreServicio: string;
    fechaAgendamiento: string;
    horaAgendamiento: string;
    valor: number;
    patenteVehiculo: string;
    direccionIda: string;
    comunaDireccionIda: string;
    tipoDireccionIda: string;
    datosAdicionalesIda: string;
    direccionVuelta: string;
    comunaDireccionVuelta: string;
    tipoDireccionVuelta: string;
    datosAdicionalesVuelta: string;
}

const initialServices: Servicio[] = [
    {
        id: "1000",
        nombreServicio: "Revisión Técnica",
        fechaAgendamiento: "2024-05-10",
        horaAgendamiento: "15:00",
        valor: 29990,
        patenteVehiculo: "XYZ123",
        direccionIda: "Av Apoquindo 1111",
        comunaDireccionIda: "Las Conde",
        tipoDireccionIda: "Casa",
        datosAdicionalesIda: "Ninguno",
        direccionVuelta: "Av Apoquindo 1111",
        comunaDireccionVuelta: "Las Condes",
        tipoDireccionVuelta: "Casa",
        datosAdicionalesVuelta: "Ninguno"
    },
    {
        id: "20000",
        nombreServicio: "Grado de Patente",
        fechaAgendamiento: "2024-05-11",
        horaAgendamiento: "10:00",
        valor: 20000,
        patenteVehiculo: "ABC456",
        direccionIda: "Av Vitacura 1234",
        comunaDireccionIda: "Vitacura",
        tipoDireccionIda: "Cada",
        datosAdicionalesIda: "Confirmar un día antes",
        direccionVuelta: "Av Apoquirno 1111",
        comunaDireccionVuelta: "Las Condes",
        tipoDireccionVuelta: "Oficina",
        datosAdicionalesVuelta: "Llamar al llegar"
    }
];


const ServiciosPage = () => {
    const [services, setServices] = useState<Servicio[]>(initialServices);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await fetch('http://localhost:3000/servicios');
            const data = await response.json();
            setServices(data.servicios);
        } catch (error) {
            console.error('Error al obtener los servicios:', error);
        }
    };

    const handleDelete = async (id: string) => { 
        try {
            const response = await fetch(`http://localhost:3000/servicios/${id}`, { method: 'DELETE' });
            const data = await response.json();
            console.log(data.message);
            fetchServices();
        } catch (error) {
            console.error('Error al eliminar el servicio:', error);
        }
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Button startIcon={<AddIcon />} variant="contained" onClick={() => alert('Agregar servicio')}>
                Crear Servicio
            </Button>
            {services.map((service: Servicio) => ( 
                <Paper key={service.id} elevation={3} sx={{ padding: 2, marginTop: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <Typography variant="h6">{service.nombreServicio}</Typography>
                        <Typography variant="body2">{`Fecha: ${service.fechaAgendamiento} ${service.horaAgendamiento}`}</Typography>
                    </div>
                    <IconButton onClick={() => handleDelete(service.id)} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Paper>
            ))}
        </Box>
    );
};

export default ServiciosPage;