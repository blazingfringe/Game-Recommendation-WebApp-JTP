import React, {useState, useEffect} from 'react'
import GameList from './components/GameList'
import {Box, Typography} from '@mui/material'


const App = () => {

  const [games, setGames] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8000/home")
    .then(response => response.json())
    .then((json) => {
      // console.log(json)
      setGames(json);
    })
  },[])

  return (
    <Box
        m={5}
        p={5}
        direction="column"
        minHeight={'100vh'}
        alignItems="center"
        justifyContent="center"
    >
      <Typography gutterBottom align='center' variant='h4'>Select Any 5 Games From the Given Collection</Typography>
      {
        games ?
        (<GameList games={games}/>)
        : (<></>)
      }
      
    </Box>
  )
}

export default App