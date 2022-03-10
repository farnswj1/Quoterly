import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { Quote } from 'types';

const Home: React.FC = () => {
  const [quote, setQuote] = React.useState<Quote>();

  return (
    <Box>
      <Typography variant="h4">Home Page</Typography>
    </Box>
  );
};

export default Home;
