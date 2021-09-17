import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AnimeImage from "../resources/AnimeWallpaper.jpg";
import { Drawer,Avatar,Container} from '@material-ui/core';
import MyImage from "../resources/Tathagat.jpg";


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 400,
    display: "inline-grid",
    margin: "25px 50px 75px 100px",
  },
  bg:{
    background: '#8baba3',
  },
 img:{
    height: theme.spacing(20),
    width: theme.spacing(20),
   margin:"auto",
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
 
 
  tabContainer:{
    maxWidth: "100px",
    flex: "auto",
    background:"#009688",
  }
}));
const WelcomePage = () => {
const [drawerOpen,setDrawerOpen]=useState(false);


const classes = useStyles();

  return (
      <div className = {classes.bg}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Welcome to the world of Anime"
          height="400"
          image= {AnimeImage}
          title="Welcome to the world of Anime"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  component="h2">
            Beauty of Anime
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Anime is a beautiful way of story telling with genres like Shounen,Seinen,Isekai,Slice of life and many others which can give you a different type of feel from your daily dose of entertainment.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setDrawerOpen(true)}>
          About Me
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
          Hi,Welcome to my Anime world.
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