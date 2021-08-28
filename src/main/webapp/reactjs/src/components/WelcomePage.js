import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import animeIamge from "../resources/AnimeWallpaper.jpg";
import { Drawer,Avatar,Container} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UserService from '../services/UserService';
import MyImage from "../resources/Tathagat.jpg";


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 400,
    display: "inline-grid",
    margin: "25px 50px 75px 100px",
  },
  bg:{
    background: '#74948c',
  },
 img:{
    height: theme.spacing(20),
    width: theme.spacing(20),
   margin:"auto",
 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    maxWidth: "350px",
    flex: "auto",
    background:"#b3b3b3",
      
  },
  intro: {
margin: "40px 10px 10px 10px",
display:"flex",
    letterSpacing: '0.15em',
    lineHeight: '2',
    fontFamily: 'cursive',
  },
  app:{
      background:"#009688",
  }
}));
const WelcomePage = () => {
const [drawerOpen,setDrawerOpen]=useState(false);
const [menuDrawerOpen,setMenuDrawerOpen]=useState(false);
const [introduction,setIntroduction]=useState();
const classes = useStyles();

const getIntroduction =() => {
    UserService.getGreeting().then((response) =>  {
        setIntroduction(response.data);
     });
     return introduction;
}

  return (
      <div className = {classes.bg}>
          <Drawer anchor= "left" open={menuDrawerOpen}   onClose={()=>setMenuDrawerOpen(false)}>
              list
          </Drawer>
           <AppBar position="static" className={classes.app}>        
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={()=> setMenuDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Welcome to the world of Anime"
          height="400"
          image= {animeIamge}
          title="Welcome to the world of Anime"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component="h2">
            Beauty of Anime
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Anime is a beautiful way of story telling with genres like shounen,seinen,isekai,slice of life and many others which can give you a different type of feel from your daily dose of entertainment.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setDrawerOpen(true)}>
          About Me
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> 
    
    <Drawer anchor= "right" open={drawerOpen} onClose={()=> setDrawerOpen(false)}>
    <Container  className={classes.container}>
       <div > 
       <Avatar alt="Tathagat" src= {MyImage} className={classes.img} />  
       <Typography variant="body2" color="textPrimary" component="p" className= {classes.intro}>
          <div>
              <div>
          Hi,welcome to my Anime world.
          </div>
          <div>
          I am Tathagat,creator of this page.
          </div>
          <div>
          I am a third year Engineering student pursuing BTech in Computer Science from N.I.T Andhra Pradesh.
          </div>
          <div>
          My hobbies are singing,watching Anime.
          </div>
          </div>
              </Typography>        
       </div>
       </Container>
    </Drawer>
    </div>
  )}
export default WelcomePage;