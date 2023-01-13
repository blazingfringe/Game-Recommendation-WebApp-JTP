import React from 'react'

/**
 * 
 * @param {json} game details of games 
 * @returns Back section of game icon
 */

const GameBack = ({ game }) => {
    return (
        <div className="back">
            <div className="score-div">
                <p className='score'>{game.scores}</p>
            </div>
            <p className='summary'>{game.summary}</p>
        </div>
    )
}

export default GameBack