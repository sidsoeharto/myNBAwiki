import React from 'react'
import PlayerDetailCard from '../components/PlayerDetailCard'
import PlayerStats from '../components/PlayerStats'

function DetailPage (props) {
  const [player, setPlayer] = React.useState({})
  const [playerData, setPlayerData] = React.useState([])

  function fetchPlayerData () {
    const playerDataUrl = 'http://data.nba.net/data/10s/prod/v1/2020/players/2544_profile.json'
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
        console.log(data.league.standard.stats)
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

    </div>
  )
}

export default DetailPage