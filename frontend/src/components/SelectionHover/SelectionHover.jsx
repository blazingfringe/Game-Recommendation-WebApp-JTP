import React from 'react'
import '../../styles/styles.scss'

const SelectionHover = ({ count }) => {
    return (
        <div className='slected-hover-div'>
            <h4 className='selected-info'>Selected Games: {count}</h4>
        </div>
    )
}

export default SelectionHover