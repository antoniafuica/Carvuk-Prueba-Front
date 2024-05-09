import React, {useEffect} from 'react';
import { useUserContext } from '../context/UserContext';
import RegisterForm from '../components/auth/RegisterForm';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    const {user} = useUserContext();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate, user]);

    const handleRegister = async (email: string, password: string, firstName: string, lastName: string, phone: string) => {
        try{
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, firstName, lastName, phone })
            });
            const data = await response.json();
            if (data.session) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error al intentar registrar nuevo usuario ->', error);
        }
    }

    return (
        <div>
            <RegisterForm handleRegister={handleRegister} />
        </div>
    );
}