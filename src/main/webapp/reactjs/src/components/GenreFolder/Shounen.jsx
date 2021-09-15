import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NarutoImage from '../../resources/NarutoImage.jpg';
import AttackOnTitanImage from '../../resources/AttackOnTitanImage.jpg';
import OnePieceImage from '../../resources/OnePieceImage.jpg';
import DragonballImage from '../../resources/DragonballImage.jpg';
import BleachImage from '../../resources/BleachImage.jpg';
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

    paragraph: {
        overflow: "scroll",
    }
}));
const Shounen = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.shounenRoot}>
            <GenreCard
                alt="Welcome to konoha"
                image={NarutoImage}
                title="Welcome to konoha"
                name="Naruto"
            />
            <GenreCard
                alt="shinzou wo sasageyo"
                image={AttackOnTitanImage}
                title="shinzou wo sasageyo"
                name="Attack on Titan"
            />
            <GenreCard
                alt="one piece does exist"
                image={OnePieceImage}
                title="one piece does exist"
                name="One Piece"
            />
            <GenreCard
                alt="Super Saiyan"
                image={DragonballImage}
                title="Super Saiyan"
                name="Dragonball"
            />
            <GenreCard
                alt="Bankai"
                image={BleachImage}
                title="Bankai"
                name="Bleach"
            />
        </div>
    )
}
export default Shounen;
