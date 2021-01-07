import React from 'react';
import PlayerDetailCard from '../components/PlayerDetailCard';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayerData } from '../store/actions'

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
  let { id } = useParams()
  const classes = useStyles()
  const playerDataUrl = `http://data.nba.net/data/10s/prod/v1/2020/players/${id}_profile.json`

  React.useEffect(() => {
    dispatch(fetchPlayerData(playerDataUrl))
  }, [dispatch, playerDataUrl])

  const player = useSelector(state => state.player.player)
  const teams = useSelector(state => state.team.teams)
  const team = useSelector(state => state.team.playerTeam)

  const playerDataRegular = useSelector(state => state.playerData.playerDataRegular)
  const playerDataLatest = useSelector(state => state.playerData.playerDataLatest)
  const playerDataSummary = useSelector(state => state.playerData.playerDataSummary)

  const today = moment()

  // let dataLatest = playerData.latest
  // let dataSummary = playerData.careerSummary
  // let dataRegular = playerData.regularSeason

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
                {team.fullName} | #{player.jersey} | {player.teamSitesOnly.posFull}
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
          <Typography variant='h3' align="center" component="h2">Career Summary:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>TPP</TableCell>
                  <TableCell>FTP</TableCell>
                  <TableCell>FGP</TableCell>
                  <TableCell>PPG</TableCell>
                  <TableCell>RPG</TableCell>
                  <TableCell>APG</TableCell>
                  <TableCell>BPG</TableCell>
                  <TableCell>MPG</TableCell>
                  <TableCell>SPG</TableCell>
                  <TableCell>ASSISTS</TableCell>
                  <TableCell>BLOCKS</TableCell>
                  <TableCell>STEALS</TableCell>
                  <TableCell>TO</TableCell>
                  <TableCell>OREB</TableCell>
                  <TableCell>DREB</TableCell>
                  <TableCell>REB</TableCell>
                  <TableCell>FGM</TableCell>
                  <TableCell>FGA</TableCell>
                  <TableCell>3PM</TableCell>
                  <TableCell>3PA</TableCell>
                  <TableCell>FTM</TableCell>
                  <TableCell>FTA</TableCell>
                  <TableCell>PF</TableCell>
                  <TableCell>PTS</TableCell>
                  <TableCell>GP</TableCell>
                  <TableCell>GS</TableCell>
                  <TableCell>+/-</TableCell>
                  <TableCell>MIN</TableCell>
                  <TableCell>DD2</TableCell>
                  <TableCell>TD3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {Object.values(playerDataSummary).map(el => <TableCell>{el}</TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant='h3' align="center" component="h2">Latest Stats:</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SEASON</TableCell>
                  <TableCell>SEASON STAGE</TableCell>
                  <TableCell>PPG</TableCell>
                  <TableCell>RPG</TableCell>
                  <TableCell>APG</TableCell>
                  <TableCell>MPG</TableCell>
                  <TableCell>TOPG</TableCell>
                  <TableCell>SPG</TableCell>
                  <TableCell>BPG</TableCell>
                  <TableCell>TPP</TableCell>
                  <TableCell>FTP</TableCell>
                  <TableCell>FGP</TableCell>
                  <TableCell>ASSISTS</TableCell>
                  <TableCell>BLOCKS</TableCell>
                  <TableCell>STEALS</TableCell>
                  <TableCell>TO</TableCell>
                  <TableCell>OREB</TableCell>
                  <TableCell>DREB</TableCell>
                  <TableCell>REB</TableCell>
                  <TableCell>FGM</TableCell>
                  <TableCell>FGA</TableCell>
                  <TableCell>TPM</TableCell>
                  <TableCell>TPA</TableCell>
                  <TableCell>FTM</TableCell>
                  <TableCell>FTA</TableCell>
                  <TableCell>PF</TableCell>
                  <TableCell>PTS</TableCell>
                  <TableCell>GP</TableCell>
                  <TableCell>GS</TableCell>
                  <TableCell>+/-</TableCell>
                  <TableCell>MIN</TableCell>
                  <TableCell>DD2</TableCell>
                  <TableCell>TD3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {Object.values(playerDataLatest).map(el => <TableCell>{el}</TableCell>)}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </div>
  )
}

export default DetailPage