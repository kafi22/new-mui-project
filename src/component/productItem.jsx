import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Wrapper from '../Wrappers/Singleproduct';
import { Link, useParams } from 'react-router-dom';
import data from '../data';


const ProductItem = () => {

  
    const {id} = useParams()
    const [Data, setData] = useState(data)

    const getMyData = Data?.find(item => item.id == id)
    const {title, img, info} = getMyData

    
  return (
    <Card sx={{ display: 'flex', justifyContent : 'flex-start', flexDirection : 'column'}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="390"
                sx={{ width: 321 }}
                style={{ objectFit : 'cover', padding : '10px'}}
                image={img}
                alt="green iguana"
            
            />
            <CardContent sx={{display : 'flex', flexDirection : 'column'}}>
                <Typography gutterBottom variant="h3" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {info}
                </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions sx={{display : 'flex', flexDirection : 'column', gap : '1rem', textAlign : 'center'}}>
            <Button size="small" color="primary">
                <Link to={'/product'}>
                back to products
                </Link>
            </Button>
        </CardActions>
  </Card>
  )
}

export default ProductItem



