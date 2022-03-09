import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import QuoteCard from 'components/QuoteCard/QuoteCard';
import axios from 'axios';
import { Quote } from 'types';

const QuoteInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [quote, setQuote] = React.useState<Quote | null>(null);
  const [error, setError] = React.useState<number | null>(null);

  React.useEffect(() => {
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
  }, []);

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

export default QuoteInfo;
