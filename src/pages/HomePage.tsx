import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

interface NavbarProps {
    isLoggedIn: boolean;
  }

  const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="#3f51b5" color="white">
        <Box>
          <img src="logotipo-carvuk.png" alt="Logo" style={{ width: '180px', height: '80px', marginRight: '8px' }} />
        </Box>
        <Box>
          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/login" variant="contained" color="secondary">
                LogIn
              </Button>
              <Button component={Link} to="/register" variant="contained" color="secondary" sx={{ marginLeft: '8px' }}>
                SignUp
              </Button>
            </>
          ) : (
            <Button variant="contained" color="secondary">
              LogOut
            </Button>
          )}
        </Box>
      </Box>
    );
  };
  

  export default function HomePage() {
    return (
      <>
        <Navbar isLoggedIn={false} />
        <Box
          style={{
            backgroundColor: '#f4f6f8',
            height: 'calc(100vh - 64px)',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" >
            Bienvenido a Carvuk
          </Typography>
          <Box style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img src="carvuk.png" alt="Car Service" style={{ width: '70%', borderRadius: 8 }} />
          </Box>
          <Button
            component={Link}
            to="/servicios"
            variant="contained"
            color="primary"
            fullWidth
            style={{ fontWeight: 'bold' }}
          >
            Ver servicios
          </Button>
        </Box>
      </>
    );
  }