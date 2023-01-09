import React from 'react'
import { useState } from 'react';
import uuid from 'react-uuid'
import {Modal, Box, styled, Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import './GameRec.css'
import GameCard from './GameCard';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
})

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '44rem',
  width: '60rem',
  borderRadius: '10px',
  m: '5',
  pt: '5',
})

const GameRec = ( {recs, toggleGameRecs} ) => {
    const [open, setOpen] = useState(true)
    const [showGame, setShowGame] = useState(false)
    const [gameDetails, setGameDetails] = useState('')

    const handleClick = (e) =>{
      setGameDetails(e.target.name)
      setShowGame(true)
    }

    const toggleGameCard = () => {
      setGameDetails('')
      setShowGame(false)
    }

  return (
    <>
      <StyledModal
        open={open}
        onClose={e=>{setOpen(false)
          toggleGameRecs()}}>
        <StyledBox 
          className='background-box' >
            <Typography 
              gutterBottom m={5} 
              align='center' 
              variant='h4'>Games Recommended for you!!
            </Typography>
          <Grid 
            container
            sx={{gridTemplateColumns: 'repeat(3, 1fr)'}} 
            m={5} 
            p={6}  
            columns={{ xs: 4, sm: 8, md: 12 }} 
            spacing={{ xs: 3, md: 6 }}>
          {recs.map((game) => (
            <Grid 
              sx={{gridTemplateColumns: 'repeat(3, 1fr)'}} 
              key={uuid()} 
              item xs={3} sm={4} md={3}>
                <img
                  onClick={(e)=>{handleClick(e)}} 
                  src={game.images}
                  name = {game.title} 
                  alt={game.title}/>
                <h4>{game.title}</h4>
            </Grid>
          ))}
        </Grid>
        {showGame === true 
          ? 
          (<GameCard 
            recs={recs}
            toggleGameCard = {toggleGameCard}
            gameDetails={gameDetails}/>)  : (<></>)}
      </StyledBox>
    </StyledModal>
  </>
  )
}

export default GameRec


