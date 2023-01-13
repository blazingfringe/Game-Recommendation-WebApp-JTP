import React, { useState, useEffect, useRef } from 'react'
import '../../styles/styles.scss'
import uuid from 'react-uuid'
import { GetGames } from '../service/GameData'
import GameRecs from '../GameRecs/GameRecs'
import GameIcon from '../GameRender/GameIcon'
import SelectionHover from '../SelectionHover/SelectionHover'
import GameBack from '../GameRender/GameBack'
import { motion } from 'framer-motion'

/**
 * 
 * @returns Game List Component
 */

const GameList = () => {
    const games = GetGames()

    const [selectedGames, setSelectedGames] = useState([])
    const [recs, setRecs] = useState(null)
    const [count, setCount] = useState(0)
    const selectionRef = useRef()
    const [showSelected, setShowSelected] = useState()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setShowSelected(entry.isIntersecting)
        })
        observer.observe(selectionRef.current)
    }, [])

    const handle = (e) => {
        if (selectedGames.includes(e.target.name)) {
            alert("Alredy Selected")
        } else {
            setSelectedGames([e.target.name, ...selectedGames])
            setCount(prevCount => prevCount + 1)
            setCss(e)
        }
    }
    function setCss(e) {
        e.target.className = "game-image-selected"
    }

    const toggleRecs = () => {
        setSelectedGames([])
        setRecs(null)
        setCount(0)
    }

    useEffect(() => {
        const getRecommendations = async () => {
            setRecs(null)
            await fetch('http://localhost:8000/api/recommendations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedGames)
            }).then((resp) => {
                return resp.json()
            }).then((res) => {
                setRecs(res)
            });
        }
        if (selectedGames.length > 4) {
            getRecommendations()
        }
    }, [selectedGames])

    return (
        <div ref={selectionRef} className="gamelist-container">
            <h1 className='gamelist-top-text'>Select any 5 Games</h1>
            <motion.div
                className="grid-container"
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}>
                {games.map((game) => (
                    <motion.div key={uuid()} className="grid-item">
                        <div key={uuid()} className="front">
                            <GameIcon game={game} handle={handle} selectedGames={selectedGames} />
                        </div>
                        <GameBack key={uuid()} game={game} />
                        <div className="hover-background"></div>
                    </motion.div>
                ))}
                <>
                    {recs !== null ? (<GameRecs recs={recs} toggleRecs={toggleRecs} />) : (<></>)}
                </>
            </motion.div>
            {showSelected ? (<SelectionHover count={count} />) : (<></>)}
        </div>
    )
}

export default GameList