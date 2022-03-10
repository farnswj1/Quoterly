import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode
}

const HeaderBox: React.FC<Props> = ({ children }) => (
  <Box className="header-link" sx={{ p: 1 }}>
    {children}
  </Box>    
);

export default HeaderBox;
