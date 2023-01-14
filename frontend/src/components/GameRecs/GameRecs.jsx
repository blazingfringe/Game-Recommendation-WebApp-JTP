import React, { useState } from 'react'
import { StyledModal } from '../../utils/muiStyles'
import uuid from 'react-uuid'
import GameCard from '../GameRender/GameCard'
import GameIcon from '../GameRender/GameIcon'

/**
 * 
 * @param  recommendations details of games recommended games
 * @returns Game Recommendations Modal Component
 */


const GameRecs = ({ open, setOpen, recommendations, toggleRecs }) => {
    const [showGame, setShowGame] = useState(false)
    const [chosenGame, setChosenGame] = useState('')

    const handler = (e, index) => {
        setChosenGame(e.target.name)
        setShowGame(true)
    }

    const toggleGameCard = () => {
        setChosenGame('')
        setShowGame(false)
    }

    if (!recommendations) {
        return null
    }

    return (
        <StyledModal
            className='modal'
            open={open}
            onClose={(e) => {
                setOpen(false)
                toggleRecs()
            }}>
            <div className="recs-container">
                <h4>Recommendations for you: </h4>
                <div className="grid-container recs">
                    {recommendations.map((game, index) => (
                        <div className="grid-item-rec" key={uuid()}>
                            <GameIcon game={game} handle={handler} index={index} classes={"game-image"} />
                        </div>
                    ))}
                </div>
                {showGame ? (
                    <GameCard
                        recommendations={recommendations}
                        toggleGameCard={toggleGameCard}
                        chosenGame={chosenGame} />) : (<></>)}
            </div>
        </StyledModal>
    )
}

export default GameRecs