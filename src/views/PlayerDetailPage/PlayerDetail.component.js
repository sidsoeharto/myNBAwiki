import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Container, Divider, Box, Tabs, Tab, AppBar } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import { PlayerSummaryContainer, TabContainer } from './PlayerDetail.styles';
import PlayerSummaryTop from './components/PlayerSummaryTop';
import PlayerSummaryBottom from './components/PlayerSummaryBottom';
import PlayerDetailPaper from '../../components/PlayerDetailPaper';
import useFetchPlayer from './PlayerDetail.hooks';
import { colors } from '../../styles/theme';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function PlayerDetailPage (props) {
  let { id } = useParams()
  const playerDataUrl = `http://localhost:8000/players/${id}`
  useFetchPlayer(playerDataUrl)
  const classes = useStyles()
  
  const player = useSelector(state => state.player.player)
  const teams = useSelector(state => state.team.teams)
  const team = useSelector(state => state.team.playerTeam)

  const playerDataHeadline = useSelector(state => state.playerData.playerDataHeadline)
  const playerDataBio = useSelector(state => state.playerData.playerDataBio)
  const playerDataStats = useSelector(state => state.playerData.playerDataStats)
  const playerDataSummary = useSelector(state => state.playerData.playerDataSummary)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(player, playerDataBio, playerDataStats, playerDataHeadline);

  return (
    <Grid container>
      <PlayerSummaryContainer team={player.TEAM_ABBREVIATION?.toLowerCase()}>
        <PlayerSummaryTop player={player} />
        <PlayerSummaryBottom player={player} stats={playerDataHeadline} />
      </PlayerSummaryContainer>
      <TabContainer>
        <Box position="static" elevation={0} style={{ maxWidth: '1440px', marginRight: 'auto', marginLeft: 'auto', backgroundColor: 'white' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="Player Detail Content Tabs"
            // indicatorColor="secondary"
            textColor={colors.nbaNavy}
            variant="fullWidth"
          >
            <Tab label="Summary" {...a11yProps(0)} />
            <Tab label="Wiki" {...a11yProps(1)} />
            <Tab label="Stats" {...a11yProps(2)} />
            <Tab label="Graphics" {...a11yProps(3)} />
          </Tabs>
        </Box>
      </TabContainer>
      <Container style={{paddingTop: '1rem'}}>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div dangerouslySetInnerHTML={{__html: player.SUMMARY}} style={{fontFamily: 'Oswald'}}>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
      </Container>
    </Grid>
  )
}

export default PlayerDetailPage