import React from 'react'
import Heading from '../../components/heading/Heading'
import './HackathonThemes.scss'

const HackathonThemes = () => {
    return (
        <>
            <Heading title="Themes" />
            <div className="hackathon-themes-container">
                <div className="theme-card"  style={{backgroundImage:"url('/images/Ai-ml-themes.jpg')"}}>
                    <div className="theme-item-name">AI/ML</div>
                </div>
                <div className="theme-card" style={{backgroundImage:"url('/images/cyber-security.jpeg')"}}>
                    <div className="theme-item-name">CYBER SECURITY</div>
                </div>
                <div className="theme-card" style={{backgroundImage:"url('/images/blockchain.jpg')"}}>
                    <div className="theme-item-name">BLOCKCHAIN</div>
                </div>
                <div className="theme-card" style={{backgroundImage:"url('/images/criminalogy.webp')"}}>
                    <div className="theme-item-name">CRIMINALOGY</div>
                </div>
                <div className="theme-card" style={{backgroundImage:"url('/images/open-innovation.jpg')"}}>
                    <div className="theme-item-name">OPEN INNOVATION</div>
                </div>
                {/* <div className="theme-card">
                    <div className="theme-item-name">CIRCLE</div>
                </div> */}
            </div>
        </>
    )
}

export default HackathonThemes