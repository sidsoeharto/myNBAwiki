import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from '../store/actions.js'

function useFetchPlayers(url) {
  const players = useSelector(state => state.player.players)
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
        dispatch(setPlayers(data.league.standard))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return [players]
}

export default useFetchPlayers