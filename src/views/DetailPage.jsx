import React from 'react';
import PlayerDetailCard from '../components/PlayerDetailCard';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../store/actions'

import { Grid, Container, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PlayerStats from '../components/PlayerStats';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Avatar, Card, CardMedia, CardHeader, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import moment from 'moment';

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
  paperContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerDetailCard: {
    borderRadius: "0%",
    border: 1,
    borderColor: 'text.secondary'
  }
}));

function DetailPage (props) {
  const dispatch = useDispatch()
  const [playerData, setPlayerData] = React.useState({})
  const [playerDataRegular, setPlayerDataRegular] = React.useState([])
  const [playerDataLatest, setPlayerDataLatest] = React.useState({})
  let { id } = useParams()
  const classes = useStyles()

  React.useEffect(() => {
    console.log(id)
    dispatch(setPlayer(id))
  }, [])

  const player = useSelector(state => state.player)
  const teams = useSelector(state => state.teams)
  const team = useSelector(state => state.playerTeam)

  const today = moment()

  // let dataLatest = playerData.latest
  // let dataSummary = playerData.careerSummary
  // let dataRegular = playerData.regularSeason

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
        setPlayerDataRegular(data.league.standard.stats.regularSeason.season)
        console.log(data.league.standard.stats.regularSeason.season)
        setPlayerDataLatest(data.league.standard.stats.latest)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    fetchPlayerData();
    console.log(team)
  } ,[])

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.playerDetailCard}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h3" align="center">
                {player.firstName + ' ' + player.lastName}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="h6" align="center">
                {/* {team.fullName} | #{player.jersey} | {player.teamSitesOnly.posFull} */}
              </Typography>
            </CardContent>
            <CardMedia
              image={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
              style={{height: 260}}
            >
            </CardMedia>
          </Card>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Height:</Typography>
                <Divider />
                <Typography variant='h5' component="h6" className={classes.paperContent}>{player.heightFeet}' {player.heightInches}'' ({player.heightMeters}m)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Weight:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{player.weightPounds}lbs ({player.weightKilograms}kg)</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Country:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{player.country}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">College:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{player.collegeName}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Age:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{Number(today.format('YYYY')) - Number(player.dateOfBirthUTC.slice(0,4))} years</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Birthdate:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{moment(player.dateOfBirthUTC).format('DD MMMM YYYY')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Draft:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{player.draft.pickNum === "" ? "Undrafted" : `${player.draft.seasonYear} R${player.draft.roundNum} Pick ${player.draft.pickNum}`}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} className={classes.root}>
            <Card className={classes.paper}>
              <CardContent>
                <Typography variant='h6' align="center" component="h3">Experience:</Typography>
                <Divider />
                <Typography variant='h5' align="center" component="h6">{player.nbaDebutYear === "2020" ? "Rookie" : `${2020 - Number(player.nbaDebutYear)} years`}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Container>
          <img src={`https://www.nba.com/stats/media/img/teams/logos/${team.tricode}_logo.svg`}/>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SEASON</TableCell>
                  <TableCell>TEAM</TableCell>
                  <TableCell>GP</TableCell>
                  <TableCell>MIN</TableCell>
                  <TableCell>PTS</TableCell>
                  <TableCell>FGM</TableCell>
                  <TableCell>FGA</TableCell>
                  <TableCell>FG%</TableCell>
                  <TableCell>3PM</TableCell>
                  <TableCell>3PA</TableCell>
                  <TableCell>3P%</TableCell>
                  <TableCell>FTM</TableCell>
                  <TableCell>FTA</TableCell>
                  <TableCell>FT%</TableCell>
                  <TableCell>OREB</TableCell>
                  <TableCell>DREB</TableCell>
                  <TableCell>REB</TableCell>
                  <TableCell>AST</TableCell>
                  <TableCell>TOV</TableCell>
                  <TableCell>STL</TableCell>
                  <TableCell>BLK</TableCell>
                  <TableCell>PF</TableCell>
                  <TableCell>FP</TableCell>
                  <TableCell>DD2</TableCell>
                  <TableCell>TD3</TableCell>
                  <TableCell>+/-</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playerDataRegular.map((data) => (
                  data.teams.forEach(season => {
                    <TableRow key={data.seasonYear}>
                      <TableCell>{season.ppg}</TableCell>
                      <TableCell>MIN</TableCell>
                      <TableCell>{playerData.latest.ppg}</TableCell>
                      <TableCell>FGM</TableCell>
                      <TableCell>FGA</TableCell>
                    </TableRow>
                  })
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </div>
  )
}

export default DetailPage