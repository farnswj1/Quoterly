import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Chip, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const QuoteCard = ({ quote }) => (
  <Card key={quote.id}>
    <CardContent>
      {
        quote.tags.map(tag => (
          <Chip key={tag.text} label={tag.text} sx={{ mr: 1 }} />
        ))
      }
      <Typography variant="h5" sx={{ mt: 2 }}>{quote.text}</Typography>
      <Typography color="text.secondary">{quote.author}</Typography>
      <Typography>
        <Link to={'/users/' + quote.created_by.id}>
          {quote.created_by.username}
        </Link>
        {quote.created_by.is_staff && <VerifiedIcon color="text.primary" />}
      </Typography>
    </CardContent>
  </Card>
);

export default QuoteCard;
