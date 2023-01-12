import React, { useState } from 'react'
import { StyledModal } from '../../utils/muiStyles'
import uuid from 'react-uuid'
import '../../styles/styles.scss'

const GameCard = ({ recs, toggleGameCard, chosenGame }) => {
    const [openCard, setOpenCard] = useState(true)
    const gameDet = recs.filter((game) => (game.title === chosenGame))
    return (
        <StyledModal
            open={openCard}
            onClose={(e) => {
                setOpenCard(false)
                toggleGameCard()
            }}>
            <div className="card-container">
                {gameDet.map((game) => (
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