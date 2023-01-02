import React, {useState, useEffect} from 'react'
import GameList from './components/GameList'
import {Box, Typography, styled} from '@mui/material'
import './App.css'

const StyledTypography = styled(Typography)({
  display:"flex",
  alignItems:"center",
  justifyContent:'center',
  fontSize: '3rem',
  fontWeight: '700',
  fontFamily: 'Montserrat',
  margin: '0 0 0.5rem',
  backgroundImage: 'var(--text-gradient)',
  backgroundClip: 'text',
  color: 'transparent',
})


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
        className='list-box'
    >
      <StyledTypography className='intro-text' gutterBottom align='center' variant='h4'>Select Any 5 Games From the Collection</StyledTypography>
      {
        games ?
        (<GameList games={games}/>)
        : (<></>)
      }
      
    </Box>
  )
}

export default App