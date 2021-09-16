import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
heading:{
  fontWeight: "bold"
}
}));
const PopUp = ({ description, title, open, handleClose }) => {
  const classes=useStyles();
  console.log("popUp", open)

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >
          <div className={classes.heading}>
          {title}
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            {description}
          </Typography>
        </DialogContent>
      </Dialog>

    </div>
  );
}
export default PopUp;
