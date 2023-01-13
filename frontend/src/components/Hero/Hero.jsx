import React from 'react'
import '../../styles/styles.scss'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'

/**
 * Component for Hero Section
 * @returns Hero Section
 */

const Hero = () => {
    const y = useMotionValue();
    const x = useMotionValue();
    const rotateY = useTransform(x, [-100, 100], [-20, 20])
    const rotateX = useTransform(y, [-100, -100], [10, -10])
    return (
        <>
            <div className='hero-wrapper'>
                <motion.div
                    className='hero-main-div'
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragElastic={0.2}
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    whileTap={{ cursor: 'grabbing' }}>
                    <motion.div
                        className="game-control-div">
                        <img src='./game-control.png' alt='game-control' />
                    </motion.div>
                    <motion.div
                        className="top-text"
                        style={{ x, y, rotateX, rotateY, z: -100000 }}
                        drag
                        dragElastic={0.2}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        whileTap={{ cursor: 'grabbing' }}>
                        <h1>Game</h1>
                    </motion.div>
                    <motion.div
                        className="bottom-text"
                        style={{ x, y, rotateX, rotateY, z: 100000 }}
                        drag
                        dragElastic={0.2}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        whileTap={{ cursor: 'grabbing' }}>
                        <h1>Recommender</h1>
                    </motion.div>
                    <motion.div className='down-arrow'>
                        <Link to='gamelist-section' spy={true} smooth={true} offset={0} duration={500}>
                            <div className="down-arrow-div">
                                <img className='down-arrow-img' src="https://cdn-icons-png.flaticon.com/512/189/189262.png" alt="down-arrow" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className="hero-wave" />
            </div>
        </>
    )
}

export default Hero