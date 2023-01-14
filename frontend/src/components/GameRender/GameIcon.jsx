import React from 'react'

/**
 * 
 * @param  game details of games 
 * @param index index of the game in the grid
 * @param handle onClick handler
 * @param classes set className for image component
 * @returns Game Icon Component
 */

const GameIcon = ({ game, index, handle, classes }) => {
    return (
        <div className="front">
            <img name={game.title} className={classes} onClick={(e) => handle(e, index)} src={game.images} alt={game.title} />
            <p className='game-title'>{game.title}</p>
        </div>
    )
}

export default GameIcon