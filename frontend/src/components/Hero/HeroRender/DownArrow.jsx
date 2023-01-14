import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const DownArrow = () => {
    return (
        <motion.div className='down-arrow'>
            <Link to='gamelist-section' spy={true} smooth={true} offset={0} duration={500}>
                <div className="down-arrow-div">
                    <img className='down-arrow-img' src="https://cdn-icons-png.flaticon.com/512/189/189262.png" alt="down-arrow" />
                </div>
            </Link>
        </motion.div>
    )
}

export default DownArrow