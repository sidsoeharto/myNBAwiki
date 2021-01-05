import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

function PlayerCard (props) {
  
  function handleClick (data, e) {
    console.log(data)
  }

  return (
    <Card>
      <CardActionArea>
        <CardMedia 
          image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player.personId}.png`}
          style={{height: 200}}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.player.firstName + ' ' + props.player.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Position: {props.player.pos}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Jersey Number: {props.player.jersey}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Team: {props.team.fullName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Favorite
        </Button>
        <Button size="small" color="primary" id={props.player.personId} onClick={(e) => handleClick(props.player, e)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlayerCard