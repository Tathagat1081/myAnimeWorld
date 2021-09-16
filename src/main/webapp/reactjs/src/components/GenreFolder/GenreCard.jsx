import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
  cover: {
    display: "inline",
  },

}))
const GenreCard = ({ alt, image, title, name ,rating}) => {
    const classes = useStyles();
    return (
      <Card>
        <CardActionArea>
          <CardMedia className={classes.cover}
            component="img"
            alt={alt}
            height="auto"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>
          <Rating
            defaultValue={rating}
            readOnly={true}
          />
          </div>
          <IconButton/>
        </CardActions>
      </Card>

    )
  }
  GenreCard.propTypes = {
    alt: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    rating:PropTypes.string,
  }
  export default GenreCard;