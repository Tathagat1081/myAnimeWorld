import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YourLieInAprilImage from '../../resources/YourLieInAprilImage.jpg';
import FiveCentimetersPerSecondImage from '../../resources/FiveCentimetersPerSecondImage.jpg';
import WeatheringWithYouImage from '../../resources/WeatheringWithYouImage.jpg';
import YourNameImage from '../../resources/YourNameImage.jpg';
import IWantToEatYourPancreasImage from '../../resources/IWantToEatYourPancreasImage.jpg';
import GenreCard from './GenreCard';


const useStyles = makeStyles((theme) => ({
  sliceOfLifeRoot: {
    background: "#8baba3",
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
    <div className={classes.sliceOfLifeRoot}>
      <GenreCard
        alt="Arima"
        image={YourLieInAprilImage}
        title="Arima"
        name="Your Lie In April"
        rating="5"
      />
      <GenreCard
        alt="Takaki"
        image={FiveCentimetersPerSecondImage}
        title="Takaki"
        name="5 Centimeters Per Second"
        rating="5"
      />
      <GenreCard
        alt="Rain Girl"
        image={WeatheringWithYouImage}
        title="Rain Girl"
        name="Weathering With You"
        rating="5"
      />
      <GenreCard
        alt="kimi no nawa"
        image={YourNameImage}
        title="kimi no nawa"
        name="Your Name"
        rating="4"
      />
      <GenreCard
        alt="Final Moments"
        image={IWantToEatYourPancreasImage}
        title="Final Moments"
        name="I Want To Eat Your Pancreas"
        rating="5"
      />
    </div>
  )
}
export default SliceOfLife;