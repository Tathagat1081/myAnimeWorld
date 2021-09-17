import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DetectiveConanImage from '../../resources/DetectiveConanImage.jpg';
import DeathNoteImage from '../../resources/DeathNoteImage.jpg';
import SteinsGateImage from '../../resources/SteinsGateImage.jpg';
import AnotherImage from '../../resources/AnotherImage.jpg';
import MonsterImage from '../../resources/MonsterImage.jpg';
import GenreCard from './GenreCard';

const useStyles = makeStyles((theme) => ({
  mysteryRoot: {
    paddingBottom:'48px',
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
const Mystery = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.mysteryRoot}>
      <GenreCard
        alt="case closed"
        image={DetectiveConanImage}
        title="case closed"
        name="Detective Conan"
        rating="5"
      />
      <GenreCard
        alt="Kira"
        image={DeathNoteImage}
        title="Kira"
        name="Death Note"
        rating="5"
      />
      <GenreCard
        alt="Mad scientisto"
        image={SteinsGateImage}
        title="Mad scientisto"
        name="Steins Gate"
        rating="5"
      />
      <GenreCard
        alt="Mystery Girl"
        image={AnotherImage}
        title="Mystery Girl"
        name="Another"
        rating="3"
      />
      <GenreCard
        alt="Are all lives equal"
        image={MonsterImage}
        title="Are all lives equal"
        name="Monster"
        rating="5"
      />
    </div>
  )
}
export default Mystery;