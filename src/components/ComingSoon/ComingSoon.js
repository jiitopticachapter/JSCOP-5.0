import React from 'react'
import "./ComingSoon.scss"


const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text text-anchor="middle" x="50%" y="80%">Coming Soon</text>
                </symbol>
                <g class = "g-ants">
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                </g>
            </svg>
        </div>

    )
}

export default ComingSoon