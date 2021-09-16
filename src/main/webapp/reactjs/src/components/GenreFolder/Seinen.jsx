import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FateZeroImage from '../../resources/FateZeroImage.jpg';
import BerserkImage from '../../resources/BerserkImage.jpg';
import ErasedImage from '../../resources/ErasedImage.jpg';
import DeathParadeImage from '../../resources/DeathParadeImage.jpg';
import VinlandSagaImage from '../../resources/VinlandSagaImage.jpg';
import GenreCard from './GenreCard';
import { FATEZERO,ERASED,DEATHPARADE,BERSERK,VINLANDSAGA} from './Const';
import PopUp from './PopUp';



const useStyles = makeStyles((theme) => ({
  seinenRoot: {
    background: "#8baba3",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(62),
    },
  },
  paragraph: {
    overflow: "scroll",
},
}));
const Seinen = () => {
  const classes = useStyles();
  const handleClick = (name, detail) => {
    setPopUpOpen(true);
    setTitle(name);
    setDescription(detail);
  }
  const handleClose = () => {
    setPopUpOpen(false);
  }
  const [description, setDescription] = useState();
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [title, setTitle] = useState();
  return (
    <div className={classes.seinenRoot}>
      <div onClick={() => handleClick("Fate/Zero",FATEZERO)}>
        <GenreCard
          alt="The Holy Grail"
          image={FateZeroImage}
          title="The Holy Grail"
          name="Fate/Zero"
          rating="5"
        />
      </div>
      <div onClick={() => handleClick("Berserk",BERSERK)}>
        <GenreCard
          alt="The Band of the Hawk"
          image={BerserkImage}
          title="The Band of the Hawk"
          name="Berserk"
          rating="4"
        />
      </div>
      <div onClick={() => handleClick("Erased",ERASED)}>
        <GenreCard
          alt="Satoru"
          image={ErasedImage}
          title="Satoru"
          name="Erased"
          rating="5"
        />
      </div>
      <div onClick={() => handleClick("Death Parade",DEATHPARADE)}>
        <GenreCard
          alt="Choose Heaven or Hell"
          image={DeathParadeImage}
          title="Choose Heaven or Hell"
          name="Death Parade"
          rating="5"
        />
      </div>
      <div onClick={() => handleClick("Vinland Saga",VINLANDSAGA)}>
      <GenreCard
        alt="Revenge"
        image={VinlandSagaImage}
        title="Revenge"
        name="Vinland Saga"
        rating="4"
      />
    </div>
    <PopUp
                open={popUpOpen}
                handleClose={handleClose}
                title={title}
                description={description}
            />
    </div >
    )}
export default Seinen;