import React from 'react'

/**
 * 
 * @param  game details of games 
 * @returns Game Icon Component
 */

const GameIcon = ({ game, handle, selectedGames }) => {
    return (
        <>
            {
                selectedGames.includes(game.title) ?
                    (<img name={game.title} className="game-image-selected" onClick={(e) => handle(e)} src={game.images} alt={game.title} />) :
                    (<img name={game.title} className="game-image" onClick={(e) => handle(e)} src={game.images} alt={game.title} />)
            }
            <p className='game-title'>{game.title}</p>
        </>
    )
}

export default GameIcon