import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  contact: {
    background: '#8baba3',
    '& > *': {
      margin: theme.spacing(17),
      width: theme.spacing(80),
      height: theme.spacing(40),
    },
  },
  paper: {
    display: "inline-block"
  },
  details: {
    fontFamily: "cursive",
    lineHeight: "3",
    marginTop: "30px",
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Paper elevation={6} className={classes.paper}>
        <div className={classes.details}>
          Contact Number:7717752239
          <br />
          Email:tathagat1081@gmail.com
          <br />
          Address:Daudpur kothi,M.I.T,Muzaffarpur
        </div>
      </Paper>
    </div>
  )
}

export default Contact;