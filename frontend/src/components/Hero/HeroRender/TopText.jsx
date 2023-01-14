import React from 'react'
import { motion } from 'framer-motion'

const TopText = ({ x, y, rotateX, rotateY }) => {
    return (
        <motion.div
            className="top-text"
            style={{ x, y, rotateX, rotateY, z: -100000 }}
            drag
            dragElastic={0.2}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}>
            <h1>Game</h1>
        </motion.div>
    )
}

export default TopText