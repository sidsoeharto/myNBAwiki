import React from 'react';
import PlayerDetailCard from '../components/PlayerDetailCard';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import PlayerStats from '../components/PlayerStats';
import { Table } from '@material-ui/core'

function DetailPage (props) {
  const [player, setPlayer] = React.useState(props.players)
  const [playerData, setPlayerData] = React.useState([])
  let { id } = useParams()

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
      <Grid container spacing={4}>
        <Grid item xs={4}>
          {JSON.stringify(player)}
        </Grid>
        <Grid item xs={8}>
          {JSON.stringify(playerData)}
        </Grid>
      </Grid>
    </div>
  )
}

export default DetailPage