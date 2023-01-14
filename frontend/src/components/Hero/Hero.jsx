import React from 'react'
import '../../styles/styles.scss'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import TopText from './HeroRender/TopText'
import BottomText from './HeroRender/BottomText'
import DownArrow from './HeroRender/DownArrow'
import GameController from './HeroRender/GameController'

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
                    <GameController />
                    <TopText x={x} y={y} rotateX={rotateX} rotateY={rotateY} />
                    <BottomText x={x} y={y} rotateX={rotateX} rotateY={rotateY} />
                    <DownArrow />
                </motion.div>
                <div className="hero-wave" />
            </div>
        </>
    )
}

export default Hero