import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import axios from 'axios';

const Quote = (props) => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = process.env.REACT_APP_API_URL + 'quotes/' + id;
    axios.get(url)
      .then(response => {
        setLoading(false);
        setQuote(response.data);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setQuote(null);
        setError(error.response.status);
      });
  }, [props]);

  return (
    <Box>
      <Typography variant="h3">Quote Page</Typography>
      {
        quote && (
          <QuoteCard quote={quote} />
        )
      }
    </Box>
  );
};

export default Quote;
