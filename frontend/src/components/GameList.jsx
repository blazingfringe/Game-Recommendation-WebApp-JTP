import React from 'react'
import { useState, useEffect } from 'react'
import GameRec from './GameRec'
import Grid from '@mui/material/Grid';
import './GameList.css'
import {Box, styled, Typography} from '@mui/material'


const StyledBox = styled(Box)({
    display:"flex",
    spacing:'0',
    direction:'column',
    alignItems:"center",
    justifyContent:'center',
    overflow: 'visible',
    overflowX: 'scroll'
})

const GameList = ( {games} ) => {
    const [gameTitle, setGameTitle] = useState([])
    const [recs, setRecs] = useState(null)
    const [getRecs, setGetRecs] = useState(false)
    const [selected, setSelected] = useState(-1)
    
    const toggleGameRecs = () => {
        setGetRecs(!getRecs)
        setGameTitle([])
        setRecs(null)
        setSelected(-1)
    }


    function handle(e){
        if(gameTitle.includes(e.target.name)){
            alert("You have already selected this game!")
        }
        else{
        setGameTitle([e.target.name, ...gameTitle,])
        setCss(e)
        }
    }

    function setCss(e){
        e.target.className = "game-image-selected"
    }


    useEffect(()=>{
        const getRecommendations = async () => {
            setRecs(null)
            fetch('http://localhost:8000/api/recommendations',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(gameTitle)
            }).then((resp) => {
                return resp.json()
            }).then((res) => {
                setRecs(res)
                setGetRecs(true)
            });
            }  
        setSelected(selected => (selected+1))
        if(gameTitle.length > 4){
            getRecommendations()
        }
    }, [gameTitle])

  return (
            <>
            {
            getRecs === true ? 
            (<GameRec recs = {recs}  toggleGameRecs= {toggleGameRecs}/>)
            :(
            <StyledBox className='main-box' 
                sx={{
                    m: 5,
                    p: 5,
                    overflow: 'visible', 
                    display: "flex",
                    flexDirection: "row",
                }}>
            <Grid 
                container
                className='grid-container'
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{gridTemplateColumns: 'repeat(3, 1fr)', overflow:'visible'}}
                columns={{ xs: 4, sm: 8, md: 12 }} 
                spacing={{ xs: 2, md: 6 }}>

        {
        games.map( (game) => (
            <Grid className='game' 
                m={3} 
                sx={{gridTemplateColumns: 'repeat(3, 1fr)', overflow:'visible'}} 
                key={game.id}>
                    <div className="front">
                    <img
                        className='game-image' 
                        onClick={(e) => handle(e)} 
                        name={game.title} id={game.title}  
                        src={game.images} alt={game.title}/>
                    <Typography 
                        className='game-title'
                        fontFamily={'Montserrat'} 
                        fontSize={'0.95rem'}
                        fontWeight={700}
                        gutterBottom 
                        align='center' 
                        variant='body1'>{game.title}
                    </Typography>
                    </div>

                    <div className="back">
                        <p className="meta-score">{game.scores}</p>
                        <Typography 
                            gutterBottom 
                            variant='body2' 
                            className="summary">
                                {game.summary}
                        </Typography>
                    </div>
                    <div className="hover-background">
                    </div>
            </Grid>
        ))
        } 
        </Grid>
        </StyledBox>)
        }
        <Typography gutterBottom m={3} 
                align='center' 
                variant='h6'>No. of Games Selected: {selected}
        </Typography>
    </>   
  )
}

export default GameList


