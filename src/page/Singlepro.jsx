import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Wrapper from '../Wrappers/Singleproduct';

const Singlepro = ({data}) => {

  const getAlldata = data?.map(item => {
    const {title,img,info, id} = item;

    return (
      
    <Card sx={{ maxWidth: 345 }} key={id}>
    <CardMedia
      sx={{ height: 240 }}
      image={img}
      title="product-image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {info}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
    )
    
  })

  return (
    <Wrapper>{getAlldata}</Wrapper>
  )
}

export default Singlepro;