import React, { Component } from 'react';
import { Grid, Card, CardContent, Divider, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
  paper: {
    margin: theme.spacing(0),
    display: 'flex',
    justifyContent: 'center',
    borderRadius: "0%",
    border: 2,
    borderColor: 'text.secondary'
  },
}));


function PlayerDetailPaper (props) {
  const classes = useStyles()

  return (
    <Grid item xs={3} className={classes.root}>
      <Card className={classes.paper}>
        <CardContent>
          <Typography variant='h6' align="center" component="h3">{props.title}</Typography>
          <Divider />
          <Typography variant='h5' align="center" component="h6">{props.content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PlayerDetailPaper