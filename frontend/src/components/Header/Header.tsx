import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, Typography } from '@mui/material';
import HeaderBox from './HeaderBox';
import { AuthenticationContext } from 'contexts';

interface Props {
  logout: MouseEventHandler<HTMLSpanElement>
}

const Header: React.FC<Props> = ({ logout }) => {
  const isAuthenticated = React.useContext(AuthenticationContext)
  
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ px: 2, py: 1 }}>
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
            <Link to="/">
              <Typography variant="h6">Quoterly</Typography>
            </Link>
          </HeaderBox>
          <HeaderBox>
            <Link to="/quotes">
              <Typography>Explore</Typography>
            </Link>
          </HeaderBox>
          <HeaderBox>
            {
              isAuthenticated ? (
                <Link to="/" onClick={logout}>
                  <Typography>Logout</Typography>
                </Link>
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
