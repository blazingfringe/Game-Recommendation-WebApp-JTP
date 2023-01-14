import React from 'react'
import { motion } from 'framer-motion'

/**
 * Component to render GameController of Hero Section
 * @returns GameController of Hero Section
 */

const GameController = () => {
    return (
        <motion.div
            className="game-control-div">
            <img src='./game-control.png' alt='game-control' />
        </motion.div>
    )
}

export default GameController