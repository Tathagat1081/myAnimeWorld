import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NarutoImage from '../../resources/NarutoImage.jpg';
import AttackOnTitanImage from '../../resources/AttackOnTitanImage.jpg';
import OnePieceImage from '../../resources/OnePieceImage.jpg';
import DragonballImage from '../../resources/DragonballImage.jpg';
import BleachImage from '../../resources/BleachImage.jpg';
import GenreCard from './GenreCard';
import PopUp from './PopUp';
import { BLEACH, DRAGONBALL, NARUTO, ONEPIECE,ATTACKONTITAN } from './Const';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    shounenRoot: {
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
    }
}));
const Shounen = () => {
    const classes = useStyles();
    const handleClick=(name,detail)=>{
           setPopUpOpen(true);
           setTitle(name);
           setDescription(detail);
    }
    const handleClose=()=>{
        setPopUpOpen(false);
    }
    const [description,setDescription]=useState();
    const [popUpOpen, setPopUpOpen] = useState(false);
    const [title,setTitle]=useState();
    return (
        <div>
            <div className={classes.shounenRoot}>
                <div onClick={() => handleClick( "Naruto",NARUTO)}>
                    <GenreCard
                        alt="Welcome to konoha"
                        image={NarutoImage}
                        title="Welcome to konoha"
                        name="Naruto"
                        rating="5"
                    >
                    </GenreCard>
                </div>
                <div onClick={() => handleClick("Attack on Titan",ATTACKONTITAN)}>
                <GenreCard
                    alt="shinzou wo sasageyo"
                    image={AttackOnTitanImage}
                    title="shinzou wo sasageyo"
                    name="Attack on Titan"
                    rating="5"
                />
                </div>
                <div onClick={() => handleClick("One Piece",ONEPIECE)}>
                <GenreCard
                    alt="one piece does exist"
                    image={OnePieceImage}
                    title="one piece does exist"
                    name="One Piece"
                    rating="5"
                />
                </div>
                <div onClick={() => handleClick("Dragonball",DRAGONBALL)}>
                <GenreCard
                    alt="Super Saiyan"
                    image={DragonballImage}
                    title="Super Saiyan"
                    name="Dragonball"
                    rating="4"
                />
                </div>
                <div onClick={() => handleClick("Bleach",BLEACH)}>
                <GenreCard
                    alt="Bankai"
                    image={BleachImage}
                    title="Bankai"
                    name="Bleach"
                    rating="4"
                />
                </div>
            </div>
            <PopUp
                open={popUpOpen}
                handleClose={handleClose}
                title={title}
                description={description}
            />
        </div>

    )
}
export default Shounen;
