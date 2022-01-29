import React, {useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const UsersList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
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
