import { useState } from 'react';
import axios from 'axios';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';

export default function GalleryItem({ item, fetchGallery }) {
  const [toggleDescription, setToggleDescription] = useState(false);

  async function incrementLikes(id) {
    try {
      await axios.put(`/api/gallery/like/${id}`);
      fetchGallery();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <Card
      component='li'
      sx={{ minWidth: '300px', minHeight: '300px', flexGrow: 1 }}
      size='sm'
    >
      <CardCover>
        <CardOverflow>
          <AspectRatio ratio={2} />
          {toggleDescription === true ? (
            <div onClick={() => setToggleDescription(!toggleDescription)}>
              {item.description}
            </div>
          ) : (
            <img
              src={item.url}
              onClick={() => setToggleDescription(!toggleDescription)}
              alt={item.name}
            />
          )}
          <IconButton
            aria-label='Like minimal photography'
            size='md'
            variant='solid'
            color='danger'
            sx={{
              position: 'absolute',
              zIndex: 3,
              borderRadius: '50%',
              right: '1rem',
              bottom: '2rem',
              transform: 'translateY(50%)',
            }}
            onClick={() => incrementLikes(item.id)}
          >
            <Favorite />
          </IconButton>
          <Typography
            level='body-md'
            fontWeight='lg'
            textColor='black'
            mt={{ xs: 12, sm: 18 }}
            sx={{
              bgcolor: 'whitesmoke',
              p: 1,
              borderRadius: '50%',
              position: 'absolute',
              left: '1rem',
              bottom: '1rem',
            }}
          >
            Likes: {item.likes}
          </Typography>
        </CardOverflow>
      </CardCover>
    </Card>
  );
}

