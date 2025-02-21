import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaGallery() {
  const theme = useTheme();
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(null);
  const audioRef = React.useRef(new Audio());

  const mediaItems = [
    {
      id: 1,
      title: 'Live From Space',
      artist: 'Mac Miller',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Live_from_Space_album_cover.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 2,
      title: 'Night Moves',
      artist: 'Bob Seger',
      image: 'https://upload.wikimedia.org/wikipedia/en/2/22/Bob_Seger_-_Night_Moves.png',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 3,
      title: 'Blue Train',
      artist: 'John Coltrane',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Blue_Train_coltrane.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    {
      id: 4,
      title: 'Kind of Blue',
      artist: 'Miles Davis',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    },
    {
      id: 5,
      title: 'Abbey Road',
      artist: 'The Beatles',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    },
    {
      id: 6,
      title: 'Thriller',
      artist: 'Michael Jackson',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    },
  ];


  const handlePlayPause = (index) => {
    if (currentTrackIndex === index) {
     
      audioRef.current.pause();
      setCurrentTrackIndex(null);
    } else {
     
      audioRef.current.src = mediaItems[index].audio;
      audioRef.current.play();
      setCurrentTrackIndex(index);
    }
  };

 
  const handleNext = () => {
    if (currentTrackIndex !== null && currentTrackIndex < mediaItems.length - 1) {
      handlePlayPause(currentTrackIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      handlePlayPause(currentTrackIndex - 1);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Media Player Gallery
      </Typography>
      <Grid container spacing={2}>
        {mediaItems.map((item, index) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card sx={{ display: 'flex', margin: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                  >
                    {item.artist}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="previous" onClick={handlePrevious} disabled={currentTrackIndex === 0}>
                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                  </IconButton>
                  <IconButton
                    aria-label="play/pause"
                    onClick={() => handlePlayPause(index)}
                  >
                    {currentTrackIndex === index ? (
                      <PauseIcon sx={{ height: 38, width: 38 }} />
                    ) : (
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    )}
                  </IconButton>
                  <IconButton
                    aria-label="next"
                    onClick={handleNext}
                    disabled={currentTrackIndex === mediaItems.length - 1}
                  >
                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                  </IconButton>
                </Box>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt={`${item.title} album cover`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
