import { useState, useEffect } from 'react';

function useFetchPlayers(url) {
  const [players, setPlayers] = useState([])
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

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.league.standard)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return [players, setPlayers]
}

export default useFetchPlayers