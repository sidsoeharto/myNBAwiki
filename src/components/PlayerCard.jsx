import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const styles = theme => ({

})

class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props

    return (
      <Card>
        <CardActionArea>
          <CardMedia 
            image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${this.props.player.personId}.png`}
            style={{height: 200}}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.player.firstName + ' ' + this.props.player.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Position: {this.props.player.pos}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Jersey Number: {this.props.player.jersey}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Team: {this.props.team.fullName}
          </Typography>
        </CardContent>
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

PlayerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlayerCard)