import React from 'react'
import { useState } from 'react';
import uuid from 'react-uuid'
import {Modal, Box, styled, Typography} from '@mui/material'
import Grid from '@mui/material/Grid';
import './GameRec.css'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
})

const StyledBox = styled(Box)({
  backgroundColor: 'rgba(255,255,255,0.5)',
  borderRadius: '1rem',
  overflow: 'visible'
})

const GameRec = ( {recs, toggleModal} ) => {
    const [open, setOpen] = useState(true)
  return (
    <>
    <StyledModal
    open={open}
    onClose={e=>
      {
      setOpen(false)
      toggleModal()
    }
    }
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <StyledBox sx={{
          m: 5, 
          pt: 5,
          display: "flex",
          flexDirection: "column",
          height: 800,
          width:900,
          overflow: "scroll",
          overflowY: "scroll",}}
          >
            <Typography gutterBottom m={5} align='center' variant='h4'>Games Recommended for you!!</Typography>
          <Grid container sx={{gridTemplateColumns: 'repeat(3, 1fr)'}} m={5} p={6}  columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 3, md: 6 }}>
          {recs.map((game) => (
            <Grid sx={{gridTemplateColumns: 'repeat(3, 1fr)'}} key={uuid()} item xs={3} sm={4} md={3}>
                <img src={game.images} alt={game.title}/>
                <h4>{game.title}</h4>
            </Grid>
          ))}
        </Grid>
    </StyledBox>
        </StyledModal>
    </>
  )
}

export default GameRec


