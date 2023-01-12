import React, { useState } from 'react'
import { StyledModal } from '../../utils/muiStyles'
import uuid from 'react-uuid'
import GameCard from '../GameRender/GameCard'


const GameRecs = ({ recs, toggleRecs }) => {
    const [open, setOpen] = useState(true)
    const [showGame, setShowGame] = useState(false)
    const [chosenGame, setChosenGame] = useState('')
    const handler = (e) => {
        setChosenGame(e.target.name)
        setShowGame(true)
    }

    const toggleGameCard = () => {
        setChosenGame('')
        setShowGame(false)
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
                    {recs.map((game) => (
                        <div className="grid-item-rec" key={uuid()}>
                            <div key={uuid()} className="front">
                                <img
                                    className='game-image'
                                    onClick={(e) => handler(e)}
                                    name={game.title}
                                    src={game.images}
                                    alt={game.title} />
                                <p className='game-title'>{game.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    showGame ? (
                        <GameCard
                            recs={recs}
                            toggleGameCard={toggleGameCard}
                            chosenGame={chosenGame} />) : (<></>)
                }
            </div>
        </StyledModal>
    )
}

export default GameRecs