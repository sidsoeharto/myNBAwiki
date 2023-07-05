import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPlayer, setPlayerDataBio, setPlayerDataHeadline, setPlayerDataStats } from '../../store/actions.js'

export function useFetchPlayer(url) {
  const player = useSelector(state => state.player.player)
  const dispatch = useDispatch()

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
      Origin: "https://stats.nba.com",
    }
  }

  useEffect(() => {
    fetch(url, options)
    .then((response) => response.json())
      .then((data) => {
        dispatch(setPlayer(data.player))
        dispatch(setPlayerDataHeadline(data.headline_stats))
        dispatch(setPlayerDataBio(data.bio))
        dispatch(setPlayerDataStats(data.stats))
      })
      .catch((err) => {
        console.log('from action', err.message)
      })
  }, [url])

  return player
}

export default useFetchPlayer