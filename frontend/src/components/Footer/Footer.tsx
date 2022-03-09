import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ p: 2, mt: 'auto' }}>
    <Box component="hr" />
    <Container>
      <Box textAlign="center">
        <Typography>
          &copy; Quoterly 2022
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
