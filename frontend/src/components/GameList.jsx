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
    overflow: 'visible'
})

const GameList = ( {games} ) => {
    
    
    const [gameTitle, setGameTitle] = useState([])
    const [recs, setRecs] = useState(null)
    const [getRecs, setGetRecs] = useState(false)
    const [selected, setSelected] = useState(-1)
    // const [style, setStyle] = useState('unSelected')

    const toggleModal = () => {
        setGetRecs(!getRecs)
        setGameTitle([])
        setRecs(null)
        setSelected(-1)
    }

    const submit = async () => {
        setRecs(null)
        const response = fetch('http://localhost:8000/api/recommendations',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameTitle)
        }).then((resp) => {
            // console.log(res)
            return resp.json()
        }).then((res) => {
            console.log(res)
            setRecs(res)
            setGetRecs(true)
        });
        console.log(response)
        }

    function handle(e){
        setGameTitle([e.target.name, ...gameTitle,])
        setCss(e)
    }

    function setCss(e){
        e.target.style.border = "solid 1px red"
    }

    useEffect(()=>{
        setSelected(selected + 1)
        if(gameTitle.length > 4){
            submit()
        }
    }, [gameTitle])

  return (
            <>
            {
            getRecs === true ? 
            (<GameRec recs = {recs}  toggleModal= {toggleModal}/>)
            :(
            <StyledBox className='main-box' sx={{
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

        {//start of lone block
        games.map( (game) => (
            <Grid className='game' m={3} sx={{gridTemplateColumns: 'repeat(3, 1fr)', overflow:'visible'}} key={game.id}>
                    {/* Card Front */}
                    <div className="front">
                    <img onClick={(e) => handle(e)} name={game.title} id={game.title}  src={game.images} alt={game.title}/>
                    <Typography className='game-title' gutterBottom align='center' variant='body1'>{game.title}</Typography>
                    </div>

                    {/* Card Hover effect */}
                    <div className="back">
                        <p className="meta-score">{game.scores}</p>
                        <Typography gutterBottom variant='body2' className="summary">
                            {game.summary}
                        </Typography>
                    </div>
                    <div className="background">
                    </div>
            </Grid>
        ))
        //end of lone block
        } 
        <Typography gutterBottom m={3} align='center' variant='h4'>No. of Games Selected: {selected}</Typography>
        </Grid>
        </StyledBox>)
        }



    </>   
  )
}

export default GameList


