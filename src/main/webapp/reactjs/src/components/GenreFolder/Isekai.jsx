import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwordArtOnlineImage from '../../resources/SwordArtOnlineImage.jpg';
import NoGameNoLifeImage from '../../resources/NoGameNoLifeImage.jpg';
import ThatTimeIGotReincarnatedAsASlimeImage from '../../resources/ThatTimeIGotReincarnatedAsASlimeImage.jpg';
import InuyashaImage from '../../resources/InuyashaImage.jpg';
import ReZeroImage from '../../resources/ReZeroImage.jpg';
import GenreCard from './GenreCard';

const useStyles = makeStyles((theme) => ({
    isekaiRoot: {
        paddingBottom:"48px",
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
const Isekai = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.isekaiRoot}>
            <GenreCard
                alt="Welcome to the Game World"
                image={SwordArtOnlineImage}
                title="Welcome to the Game World"
                name="Sword Art Online"
                rating="3"
            />
            <GenreCard
                alt="Slime Monster"
                image={ThatTimeIGotReincarnatedAsASlimeImage}
                title="Slime Monster"
                name="That time I Got Reincarnated As A Slime"
                rating="3"
            />
            <GenreCard
                alt="God vs us let's play"
                image={NoGameNoLifeImage}
                title="God vs us let's play"
                name="No Game No Life"
                rating="5"
            />
            <GenreCard
                alt="Inuyasha"
                image={InuyashaImage}
                title="Inuyasha"
                name="Inuyasha"
                rating="2"
            />
            <GenreCard
                alt="Repeat"
                image={ReZeroImage}
                title="Repeat"
                name="Re Zero: Starting life in another world"
                rating="2"
            />
        </div>
    )
}
export default Isekai;