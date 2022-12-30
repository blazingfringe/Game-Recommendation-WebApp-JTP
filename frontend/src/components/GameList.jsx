import React from 'react'
import { useState, useEffect } from 'react'
import GameRec from './GameRec'
import Grid from '@mui/material/Grid';
import {Box, stepClasses, styled, Typography} from '@mui/material'


const StyledBox = styled(Box)({
    display:"flex",
    spacing:'0',
    direction:'column',
    alignItems:"center",
    justifyContent:'center',
    // minHeight: '100vh',
})


const GameList = ( {games} ) => {
    
    
    const [gameTitle, setGameTitle] = useState([])
    const [recs, setRecs] = useState(null)
    const [getRecs, setGetRecs] = useState(false)
    const [selected, setSelected] = useState(-1)
    const [style, setStyle] = useState('unSelected')

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
        // console.log(response)
        }

    function handle(e){
        setGameTitle([e.target.name, ...gameTitle,])
        setCss(e)
        // setStyle("onSelected")
    }

    function setCss(e){
        // console.log(e.target.style)
        e.target.style.border = "solid 1px red"
    }

    useEffect(()=>{
        // console.log(gameTitle);
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
            <StyledBox bgcolor='white' sx={{
                m: 5, 
                // pt: 5,
                display: "flex",
                flexDirection: "row",
                // height: 800,
                // width:900,
                overflow: "scroll",
                overflowY: "scroll",}}>
            {/* <form onSubmit={(e)=>submit(e)} method="POST" action='/rec'> */}
            <Grid 
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            columns={{ xs: 4, sm: 8, md: 12 }} 
            spacing={{ xs: 2, md: 6 }}>

        {//start of lone block
        games.map( (game) => (
            <Grid key={game.id} item xs={3} sm={3} md={3}>
                <label>
                    {/* <input onChange={(e) => handle(e)} name = {game.title} id={game.title} type="radio" /> */}
                    <img onClick={(e) => handle(e)} className={style} name = {game.title} id={game.title}  src={game.images} alt={game.title}/>
                    <h4>{game.title}</h4>
                </label>
            </Grid>
        ))} 
        <Typography gutterBottom m={5} align='center' variant='h4'>No. of Games Selected: {selected}</Typography>
        </Grid>
        {/* <button>Submit</button> */}
        {/* </form> */}
        </StyledBox>)
        }



    </>   
  )
}

export default GameList


