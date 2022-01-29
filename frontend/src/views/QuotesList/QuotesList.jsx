import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import QuoteCard from '../../components/QuoteCard/QuoteCard';

const QuotesList = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + 'quotes/all';
    axios.get(url)
      .then(response => {
        setLoading(false);
        setQuotes(response.data.results);
        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setQuotes([]);
        setPreviousPage(null);
        setNextPage(null);
        setError(error.response.status);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h3">Quotes List Page</Typography>
      {
        quotes.map(quote => (
          <QuoteCard key={quote.id} quote={quote} />
        ))
      }
    </Box>
  );
};

export default QuotesList;
