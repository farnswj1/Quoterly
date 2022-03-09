import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import QuoteCard from 'components/QuoteCard/QuoteCard';
import axios from 'axios';
import { User, Quote } from 'types';

const UserProfile: React.FC = () => {
  const { id } = useParams<string>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<User | null>(null);
  const [quotes, setQuotes] = React.useState<Quote[] | []>([]);
  const [error, setError] = React.useState<number | null>(null);

  React.useEffect(() => {
    const url = process.env.REACT_APP_API_URL + 'users/' + id;
    axios.get(url)
      .then(response => {
        setLoading(false);
        setUser(response.data.user);
        setQuotes(response.data.quotes);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setUser(null);
        setQuotes([]);
        setError(error.response.status);
      });
  }, [id]);

  return (
    <Box>
      <Typography variant="h3">User Profile Page</Typography>
      {
        user && (
          <Box>
            <Typography>{user.username}</Typography>
            <Typography>{user.first_name}</Typography>
            <Typography>{user.last_name}</Typography>
            <Typography>{user.email}</Typography>
          </Box>
        )
      }
      {
        quotes.map(quote => (
          <QuoteCard key={quote.id} quote={quote} />
        ))
      }
    </Box>
  );
};

export default UserProfile;
