import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia 
            image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.props.player.personId}.png`}
            style={{height: 200}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.player.firstName + ' ' + this.props.player.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Position: {this.props.player.pos}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Favorite
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default PlayerCard