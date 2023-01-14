import React, { useState } from 'react'
import { StyledModal } from '../../utils/muiStyles'
import uuid from 'react-uuid'
import '../../styles/styles.scss'

/**
 * 
 * @param recs: details of games 
 * @param toggleGameCard: function to toggle game cards
 * @param chosenGame: Game being clicked on 
 * @returns Game Card Component
 */

const GameCard = ({ recommendations, toggleGameCard, chosenGame }) => {
    const [openCard, setOpenCard] = useState(true)
    const gameDetails = recommendations.filter((game) => (game.title === chosenGame))
    return (
        <StyledModal
            open={openCard}
            onClose={(e) => {
                setOpenCard(false)
                toggleGameCard()
            }}>
            <div className="card-container">
                {gameDetails.map((game) => (
                    <div className="card-holder" key={uuid()}>
                        <h2 className='card-title'>{game.title}</h2>
                        <img className='card-img' src={game.images} alt={game.title} />
                        <p className='card-summary'>{game.summary}</p>
                    </div>
                ))}
            </div>
        </StyledModal>
    )
}

export default GameCard