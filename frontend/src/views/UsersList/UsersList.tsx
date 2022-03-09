import React from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { User } from 'types'

const UsersList: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [users, setUsers] = React.useState<User[] | []>([]);
  const [previousPage, setPreviousPage] = React.useState<string | null>(null);
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const url = process.env.REACT_APP_API_URL + 'users/all';
    axios.get(url)
      .then(response => {
        setLoading(false);
        setUsers(response.data.results);
        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);
        setError(null);
      })
      .catch(error => {
        setLoading(false);
        setUsers([]);
        setPreviousPage(null);
        setNextPage(null);
        setError(error.response.status);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h3">Users List Page</Typography>
      {
        users.map(user => (
          <Box key={user.id} sx={{ mb: 2 }}>
            <Typography>{user.username}</Typography>
            <Typography>{user.first_name + ' ' + user.last_name}</Typography>
          </Box>
        ))
      }
    </Box>
  );
};

export default UsersList;
