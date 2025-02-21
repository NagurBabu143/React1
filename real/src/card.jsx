import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';
import { Favorite, Share } from '@mui/icons-material';

const articles = [
  {
    id: 1,
    title: 'How to Learn React',
    image: '/images/react.jpg',
    description: 'A comprehensive guide to learning React.',
  },
  {
    id: 2,
    title: 'Understanding JavaScript',
    image: '/images/javascript.jpg',
    description: 'Deep dive into JavaScript fundamentals.',
  },
];

const CardsWithMediaAndIcons = () => {
  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={article.image}
              alt={article.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
            <Grid container justifyContent="flex-end" spacing={1} sx={{ padding: 2 }}>
              <Grid item>
                <IconButton>
                  <Favorite />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <Share />
                </IconButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsWithMediaAndIcons;
