import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TokyoGhoulImage from '../../resources/TokyoGhoulImage.jpg';
import CodeGeassImage from '../../resources/CodeGeassImage.jpg';
import MiraiNikkiImage from '../../resources/MiraiNikkiImage.jpg';
import ThePromisedNeverlandImage from '../../resources/ThePromisedNeverlandImage.jpg';
import PaprikaImage from '../../resources/PaprikaImage.jpg';
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
const Thriller = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.shounenRoot}>
            <GenreCard
                alt="Tokyo Ghoul"
                image={TokyoGhoulImage}
                title="Tokyo Ghoul"
                name="Tokyo Ghoul"
            />
            <GenreCard
                alt="Zero is lelouch"
                image={CodeGeassImage}
                title="Zero is lelouch"
                name="Code Geass"
            />
            <GenreCard
                alt="The Future Diary"
                image={MiraiNikkiImage}
                title="The Future Diary"
                name="Mirai Nikki"
            />
            <GenreCard
                alt="Escape"
                image={ThePromisedNeverlandImage}
                title="Escape"
                name="The Promised Neverland"
            />
            <GenreCard
                alt="Enter into Dreams"
                image={PaprikaImage}
                title="Enter into Dreams"
                name="Paprika"
            />
        </div>
    )
}
export default Thriller;