import React, { useState } from 'react';
import { Box, Card, Typography } from '@mui/material';

const Home = () => {
  const [quote, setQuote] = useState({
    "id": 1,
    "username": "staff1",
    "first_name": "Staff",
    "last_name": "One",
    "email": "staff1@gmail.com",
    "is_staff": true
  });

  return (
    <Box>
      <Typography variant="h3">Home Page</Typography>
      <Typography variant="h6">{quote.id}</Typography>
      <Typography variant="h6">{quote.username}</Typography>
      <Typography variant="h6">{quote.first_name}</Typography>
      <Typography variant="h6">{quote.last_name}</Typography>
    </Box>
  );
};

export default Home;
