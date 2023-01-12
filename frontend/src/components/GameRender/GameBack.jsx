import React from 'react'

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