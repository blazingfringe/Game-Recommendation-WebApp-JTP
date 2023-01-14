import React from 'react'
import { motion } from 'framer-motion'

/**
 * Component to Render TopText of Hero Section
 * @param x set current x value using framer motion 
 * @param y set current y value using framer motion 
 * @param rotateX transform x value by given factors upon dragging the mouse
 * @param rotateY transform y value by given factors upon dragging the mouse
 * @returns Top Text Component
 */

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