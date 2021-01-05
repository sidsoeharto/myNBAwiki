import React from 'react';
import PlayerDetailCard from '../components/PlayerDetailCard';
import { useParams } from 'react-router-dom';
import { Grid, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PlayerStats from '../components/PlayerStats';
import { Table } from '@material-ui/core';
import { Avatar, Card, CardMedia, CardHeader, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
  },
}));

function DetailPage (props) {
  const [player, setPlayer] = React.useState(props.players)
  const [team, setTeam] = React.useState(props.team)
  const [playerData, setPlayerData] = React.useState([])
  let { id } = useParams()
  const classes = useStyles()

  function fetchPlayerData () {
    const playerDataUrl = `http://data.nba.net/data/10s/prod/v1/2020/players/${id}_profile.json`
    const template = require('nba-client-template')
    const options = {
      headers: {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US",
        Accept: "*/*",
        "User-Agent": template.user_agent,
        Referer: template.referrer,
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
        Origin: "http://stats.nba.com",
      }
    }
    fetch(playerDataUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setPlayerData(data.league.standard.stats)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchPlayerData();
  } ,[])

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
              style={{height: 260}}
            >
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h3" align="center">
                {player.firstName + ' ' + player.lastName}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="h6" align="center">
                {team.fullName} | #{player.jersey} | {player.teamSitesOnly.posFull}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Paper>item</Paper>
          </Grid>
        </Grid>
        <Container>
          {JSON.stringify(playerData)}
        </Container>
      </Grid>
    </div>
  )
}

export default DetailPage