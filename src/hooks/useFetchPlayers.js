import { useState, useEffect } from 'react';

function useFetchPlayers(url) {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch(url)
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