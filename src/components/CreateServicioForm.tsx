import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface CreateServiceFormProps {
    onCreateService: (serviceData: ServiceData) => void;
}

interface ServiceData {
    fechaAgendamiento: string;
    horaAgendamiento: string;
    valor: string;
    nombreServicio: string;
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

const CreateServiceForm: React.FC<CreateServiceFormProps> = ({ onCreateService }) => {
    const [formData, setFormData] = useState<ServiceData>({
        fechaAgendamiento: '',
        horaAgendamiento: '',
        valor: '',
        nombreServicio: '',
        patenteVehiculo: '',
        direccionIda: '',
        comunaDireccionIda: '',
        tipoDireccionIda: '',
        datosAdicionalesIda: '',
        direccionVuelta: '',
        comunaDireccionVuelta: '',
        tipoDireccionVuelta: '',
        datosAdicionalesVuelta: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreateService(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography variant="h6">Crear Nuevo Servicio</Typography>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                Crear Servicio
            </Button>
        </Box>
    );
};

export default CreateServiceForm;
