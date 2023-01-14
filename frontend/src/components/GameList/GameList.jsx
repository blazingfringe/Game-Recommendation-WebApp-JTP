import React, { useState, useEffect, useRef } from 'react'
import '../../styles/styles.scss'
import uuid from 'react-uuid'
import { UseGetGames } from '../custom_hooks/UseGetGames'
import GameRecs from '../GameRecs/GameRecs'
import GameIcon from '../GameRender/GameIcon'
import SelectionHover from '../SelectionHover/SelectionHover'
import GameBack from '../GameRender/GameBack'

/**
 * Component for Showing Initial Game List
 * @returns Game List Component
 */

const GameList = () => {
    const games = UseGetGames()
    const [selectedGames, setSelectedGames] = useState([])
    const [recommendations, setRecommendations] = useState(null)
    const [count, setCount] = useState(0)
    const selectionRef = useRef()
    const [showSelected, setShowSelected] = useState()
    const [trackSelected, setTrackSelected] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setShowSelected(entry.isIntersecting)
        })
        observer.observe(selectionRef.current)
    }, [])

    const handle = (e, index) => {
        if (selectedGames.includes(e.target.name)) {
            alert("Already Selected")
        } else {
            setSelectedGames([e.target.name, ...selectedGames])
            setCount(prevCount => prevCount + 1)
            setTrackSelected([...trackSelected, index])
        }
    }
    const toggleRecs = () => {
        setSelectedGames([])
        setRecommendations(null)
        setCount(0)
        setTrackSelected([])
    }

    function toggleActiveStyle(index) {
        if (trackSelected.includes(index)) {
            return "game-image-selected"
        } else {
            return "game-image"
        }
    }

    useEffect(() => {
        const getRecommendations = async () => {
            setRecommendations(null)
            await fetch('http://localhost:8000/api/recommendations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedGames)
            }).then((resp) => {
                return resp.json()
            }).then((res) => {
                setRecommendations(res)
            });
        }
        if (selectedGames.length > 4) {
            getRecommendations()
            setOpen(true)
        }
    }, [selectedGames])

    return (
        <div ref={selectionRef} className="gamelist-container">
            <h1 className='gamelist-top-text'>Select any 5 Games</h1>
            <div className="grid-container">
                {games.map((game, index) => (
                    <div key={uuid()} className="grid-item">
                        <GameIcon game={game} index={index} handle={handle} classes={toggleActiveStyle(index)} />
                        <GameBack game={game} />
                        <div className="hover-background" />
                    </div>
                ))}
                <GameRecs open={open} setOpen={setOpen} recommendations={recommendations} toggleRecs={toggleRecs} />
            </div>
            <SelectionHover showSelected={showSelected} count={count} />
        </div>
    )
}

export default GameList