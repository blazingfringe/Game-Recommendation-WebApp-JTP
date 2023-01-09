import React from 'react'
import { Modal, Box, styled, Typography } from '@mui/material'
import { useState } from 'react'
import uuid from 'react-uuid'
import './GameCard.css'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
})

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'white',
    borderRadius: '10px',
    width: '65rem',
    height: '30rem',
    overflowY: 'scroll'
})

const GameCard = ({recs, toggleGameCard, gameDetails}) => {
    const [open, setOpen] = useState(true)
    const gameDet = recs.filter((game) =>(game.title === gameDetails))
    return (
    <StyledModal
        open={open}
        onClose={e=>{
            setOpen(false)
            toggleGameCard()}}>
            <StyledBox>
                {gameDet.map((game) => (
                    <div className='card-container' key={uuid()}>
                    <Typography
                        gutterBottom
                        variant='h2'
                        className='title'>
                            {game.title}
                    </Typography>
                    <img className='image' src={game.images} alt={game.title} />
                    <Typography 
                        gutterBottom 
                        variant='body2'
                        fontSize={'1.2rem'} 
                        className='summary-text'>{game.summary}</Typography>
                    </div>
                ))}
            </StyledBox>
    </StyledModal>
  )
}

export default GameCard