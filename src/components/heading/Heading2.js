import React from 'react'
import './Heading2.scss'

const Heading2 = (props) => {
    return (
        <>
            <h2 className="heading_main">
                {props.title}
            </h2>
        </>


    )
}

export default Heading2