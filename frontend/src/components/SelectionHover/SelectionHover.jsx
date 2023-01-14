import React from 'react'
import '../../styles/styles.scss'

/**
 * Component to render hovering banner showing current number of selected games
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