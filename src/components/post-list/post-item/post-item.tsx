import React from 'react';
import { Card, Typography } from '@mui/material';

interface IPostItem {
  title: string;
  body: string;
  userName: string;
}

const PostItem = React.memo(({ title, body, userName }: IPostItem) => (
  <Card variant="outlined" sx={{ padding: '10px 15px' }}>
    <Typography variant="h6" color="#5f9de3" lineHeight={1.4} mb={1}>
      {title}
    </Typography>
    <Typography variant="body2" mb={1}>
      {body}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {userName}
    </Typography>
  </Card>
));

export { PostItem };
