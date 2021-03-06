import React, { useState } from 'react';
import { Typography, IconButton, AppBar, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ItemData from "../../resources/Logo.jpg";
import { Drawer, Container, List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@material-ui/core/styles';
import history from '../History';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles((theme) => ({
  app:
  {
    background: "#009688"
  },
  menuButton:
  {
    marginRight: theme.spacing(2),
  },
  homeButton:
  {

  },
  optionsButton:
  {

  },
  secondContainer:
  {
    maxwidth: theme.spacing(2),
    display:"contents"
    
  },
  logo: {
    background: "#009688",
    margin: "0px 0px 0px 0px",
  },

  ingredients: {
    background: "#DCDCDC",
  }
}));
const Dashboard = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [subListOpen, setSubListOpen] = useState(false);

  const getGenrePage = (text) => {
    if (text === 'Shounen')
      history.push('/Genre1')
    else if (text === 'Seinen')
      history.push('/Genre2')
    else if (text === 'Isekai')
      history.push('/Genre3')
    else if (text === 'Slice of Life')
      history.push('/Genre4')
    else if (text === 'Mystery')
      history.push('Genre5')
    else if (text === 'Thriller')
      history.push('Genre6')
  };
  const getOptionPage = (text) => {
    if (text === 'Genre')
      setSubListOpen(!subListOpen)
    if (text === 'OST')
      history.push('/OST')
    else if (text === 'Favourites')
      history.push('/favourites')
    else if (text === 'About Us')
      history.push('/AboutUs')
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={() => setMenuDrawerOpen(true)} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div>
            <Button classes={classes.homeButton} onClick={() => history.push('/')} color="inherit">
              <Typography variant="h6">
                Home
              </Typography>
            </Button>
            <Button classes={classes.optionsButton} onClick={() => history.push('/contact')} color="inherit">
              <Typography variant="h6">
                contacts
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={menuDrawerOpen} onClose={() => setMenuDrawerOpen(false)}>
        <img src={ItemData} alt="Logo" className={classes.logo} />
        <Container className={classes.secondContainer}>
          <div>
            <List>
              {['Genre', 'OST', 'Favourites'].map((text) => (
                <div>
                  <ListItemButton key={text} onClick={() => getOptionPage(text)}>
                    <ListItemText primary={text} />
                    {text === 'Genre' && (
                      subListOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
                    )}
                  </ListItemButton>
                  {text === 'Genre' && (
                    <Collapse in={subListOpen} timeout="auto" unmountOnExit>
                      <List>
                        {['Shounen', 'Seinen', 'Isekai', 'Slice of Life', 'Mystery', 'Thriller'].map((text) => (
                          <ListItem button key={text} className={classes.ingredients} onClick={() => getGenrePage(text)}>
                            <ListItemText primary={text} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ))}
            </List>
          </div>
        </Container>
      </Drawer>
    </div>
  )
}
export default Dashboard;