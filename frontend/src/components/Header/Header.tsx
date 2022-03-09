import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, Typography } from '@mui/material';
import HeaderBox from './HeaderBox';
import Token from 'auth/Token';

interface Props {
  logout: CallableFunction
}

const Header: React.FC<Props> = ({ logout }) => {
  const token: string | null = new Token().get();
  
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ p: 1 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <HeaderBox>
            <Typography variant="h6">Quoterly</Typography>
          </HeaderBox>
          <HeaderBox>
            {
              token ? (
                <Typography>Logout</Typography>
              ) : (
                <Link to="/login">
                  <Typography>Login</Typography>
                </Link>
              )
            }
          </HeaderBox>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
