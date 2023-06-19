import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function Gallery() {
  return (
    <Box  sx={{width:"100%"}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg',
    title: 'Bed',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2013/02/09/04/19/surgery-79584_640.jpg',
    title: 'Books',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/08/05/29/operation-1807543_640.jpg',
    title: 'Sink',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_640.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2013/02/24/01/17/surgery-85574_640.jpg',
    title: 'Blinds',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/06/28/14/03/dental-2450751_640.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/04/19/20/10/test-tube-5065426_640.jpg',
    title: 'Doors',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/08/02/07/50/medical-procedures-3579029_640.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/11/12/19/25/diabetes-528678_640.jpg',
    title: 'Storage',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/05/23/21/01/jar-2338584_640.jpg',
    title: 'Candle',
  },
  
];