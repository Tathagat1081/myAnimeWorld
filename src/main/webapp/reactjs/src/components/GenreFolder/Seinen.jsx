import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FateZeroImage from '../../resources/FateZeroImage.jpg';
import BerserkImage from '../../resources/BerserkImage.jpg';
import ErasedImage from '../../resources/ErasedImage.jpg';
import DeathParadeImage from '../../resources/DeathParadeImage.jpg';
import VinlandSagaImage from '../../resources/VinlandSagaImage.jpg';
import GenreCard from './GenreCard';

const useStyles=makeStyles((theme)=>({
shounenRoot:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(30),
      height: theme.spacing(62),
    },
    },
    cover:{
        display:"inline",     
    },
    paragraph:{
        overflow:"scroll",
    }
}));
const Seinen = () =>
{
    const [drawerOpen,setDrawerOpen]=useState(false);
    const classes=useStyles();
    return(
    <div className={classes.shounenRoot}>
      <GenreCard
       alt="The Holy Grail"
       image= {FateZeroImage}
       title="The Holy Grail"
       name="Fate/Zero"
      />
      <GenreCard
       alt="The Band of the Hawk"
       image= {BerserkImage}
       title="The Band of the Hawk"
       name="Berserk"
      />
       <GenreCard
       alt="Satoru"
       image= {ErasedImage}
       title="Satoru"
       name="Erased"
      />
       <GenreCard
       alt="Choose Heaven or Hell"
       image= {DeathParadeImage}
       title="Choose Heaven or Hell"
       name="Death Parade"
      />
       <GenreCard
       alt="Revenge"
       image= {VinlandSagaImage}
       title="Revenge"
       name="Vinland Saga"
      />
    </div>
    )}
export default Seinen;