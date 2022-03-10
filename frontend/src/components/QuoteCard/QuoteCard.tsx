import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import Quote from 'types/Quote';

interface Props {
  quote: Quote
}

const QuoteCard: React.FC<Props> = ({ quote }) => (
  <Card key={quote.id} sx={{ m: 4 }}>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          {
            quote.tags.map(tag => (
              <Chip key={tag.text} label={tag.text} sx={{ mr: 1 }} />
            ))
          }
        </Box>
        <Box>
          {quote.created_by.is_staff && <VerifiedIcon color="primary" />}
        </Box>
      </Box>
      <Box>
        <Typography color="text.secondary">{quote.author}</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>{quote.text}</Typography>
        <Typography>
          <Link to={'/users/' + quote.created_by.id}>
            {quote.created_by.username}
          </Link>

        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default QuoteCard;
