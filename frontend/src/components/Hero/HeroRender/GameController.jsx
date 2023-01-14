import React from 'react'
import { motion } from 'framer-motion'

const GameController = () => {
    return (
        <motion.div
            className="game-control-div">
            <img src='./game-control.png' alt='game-control' />
        </motion.div>
    )
}

export default GameController