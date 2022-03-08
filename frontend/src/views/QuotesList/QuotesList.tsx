import React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import QuoteCard from 'components/QuoteCard/QuoteCard';
import Quote from 'types/Quote';

const QuotesList: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [quotes, setQuotes] = React.useState<Quote[]>([]);
  const [previousPage, setPreviousPage] = React.useState<string | null>(null);
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<number | null>(null);

  React.useEffect(() => {
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
