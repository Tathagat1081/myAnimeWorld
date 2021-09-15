import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YourLieInAprilImage from '../../resources/YourLieInAprilImage.jpg';
import FiveCentimetersPerSecondImage from '../../resources/FiveCentimetersPerSecondImage.jpg';
import WeatheringWithYouImage from '../../resources/WeatheringWithYouImage.jpg';
import YourNameImage from '../../resources/YourNameImage.jpg';
import IWantToEatYourPancreasImage from '../../resources/IWantToEatYourPancreasImage.jpg';
import GenreCard from './GenreCard';


const useStyles = makeStyles((theme) => ({
  shounenRoot: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(62),
    },
  },
  cover: {
    display: "inline",
  },
  paragraph: {
    overflow: "scroll",
  }
}));
const SliceOfLife = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.shounenRoot}>
      <GenreCard
        alt="Arima"
        image={YourLieInAprilImage}
        title="Arima"
        name="Your Lie In April"
      />
      <GenreCard
        alt="Takaki"
        image={FiveCentimetersPerSecondImage}
        title="Takaki"
        name="5 Centimeters Per Second"
      />
      <GenreCard
        alt="Rain Girl"
        image={WeatheringWithYouImage}
        title="Rain Girl"
        name="Weathering With You"
      />
      <GenreCard
        alt="kimi no nawa"
        image={YourNameImage}
        title="kimi no nawa"
        name="Your Name"
      />
      <GenreCard
        alt="Final Moments"
        image={IWantToEatYourPancreasImage}
        title="Final Moments"
        name="I Want To Eat Your Pancreas"
      />
    </div>
  )
}
export default SliceOfLife;