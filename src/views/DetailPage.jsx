import React from 'react';
import PlayerDetailPaper from '../components/PlayerDetailPaper';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayerData } from '../store/actions'

import { Grid, Container, Divider } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import moment from 'moment';

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

function DetailPage (props) {
  const dispatch = useDispatch()
  let { id } = useParams()
  const playerDataUrl = `https://data.nba.net/data/10s/prod/v1/2020/players/${id}_profile.json`
  const classes = useStyles()

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
          <PlayerDetailPaper title={'Height:'} content={`${player.heightFeet}' ${player.heightInches}'' (${player.heightMeters}m)`}/>
          <PlayerDetailPaper title={'Weight:'} content={`${player.weightPounds}lbs (${player.weightKilograms}kg)`}/>
          <PlayerDetailPaper title={'Country:'} content={player.country}/>
          <PlayerDetailPaper title={'College:'} content={player.collegeName}/>
          <PlayerDetailPaper title={'Age:'} content={`${Number(today.format('YYYY')) - Number(player.dateOfBirthUTC.slice(0,4))} years`} />
          <PlayerDetailPaper title={'Birthdate:'} content={moment(player.dateOfBirthUTC).format('DD MMMM YYYY')}/>
          <PlayerDetailPaper title={'Draft:'} content={player.draft.pickNum === "" ? "Undrafted" : `${player.draft.seasonYear} R${player.draft.roundNum} Pick ${player.draft.pickNum}`}/>
          <PlayerDetailPaper title={'Experience:'} content={player.nbaDebutYear === "2020" ? "Rookie" : `${2020 - Number(player.nbaDebutYear)} years`}/>
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