import React from 'react';
import CreateServicioForm from '../components/CreateServicioForm';

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

const CreateServicePage = () => {
    const handleCreateService = async (serviceData: ServiceData) => {
        try {
            const response = await fetch('http://localhost:3000/servicios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(serviceData)
            });
            if (!response.ok) {
                throw new Error('Failed to create service');
            }
            const result = await response.json();
            alert('Service created successfully!');
        } catch (error) {
            console.error('Error creating service:', error);
        }
    };

    return (
        <div>
            <h1>Create Service</h1>
            <CreateServicioForm onCreateService={handleCreateService} />
        </div>
    );
};

export default CreateServicePage;