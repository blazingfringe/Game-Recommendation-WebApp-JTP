import React from 'react'
import '../../styles/styles.scss'

/**
 * 
 * @param {number} count Number of selected games
 * @returns Number of Selected Games as Hover
 */

const SelectionHover = ({ showSelected, count }) => {
    if (!showSelected) {
        return null
    }
    return (
        <div className='slected-hover-div'>
            <h4 className='selected-info'>Selected Games: {count}</h4>
        </div>
    )
}

export default SelectionHover