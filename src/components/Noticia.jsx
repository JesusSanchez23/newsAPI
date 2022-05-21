import React from 'react';
import Grid from '@mui/material/Grid';
import {Card, CardActions, CardContent, CardMedia, Link, Typography} from '@mui/material';


const Noticia = ({noticia}) => {
  const {urlToImage, url, title, description,author, source} = noticia;
    return (
    <Grid
    item
    md={6}
    lg={4}
    >
        <Card>
          {urlToImage &&  <CardMedia
          height={250}
            component="img"
            alt={title}
            image={urlToImage}
            />}
        <CardContent>
            <Typography  variant="body1" color="error">
                {source.name}
            </Typography>
            <Typography  variant="h5" component="div">
                {title}
            </Typography>

            <Typography  variant="body2">
                {description}
            </Typography>
        </CardContent>

        <CardActions>
            <Link 
            target="_blank"
            href={url}
            variant="button"
            color="primary"
            width="100%"
            textAlign="center"
            sx={{textDecoration: 'none'}}
            >
            Leer Noticia</Link>
        </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia