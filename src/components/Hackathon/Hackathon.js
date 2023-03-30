import React from 'react'
import './Hackathon.scss'
import { useEffect } from 'react';

const Hackathon = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className='hackathon'>
            <h2 data-text='HACKATHON&nbsp;IS&nbsp;LIVE!'>HACKATHON&nbsp;IS&nbsp;LIVE!</h2>
            {/* <a href="https://devfolio.co/" className="hackathon_button"> <h1>REGISTER NOW ON</h1>
                <img src='https://jithack.tech/images/logo/Devfolio_Logo-White@2x.png' alt="DEVFOLIO" width="100px" />
            </a> */}
            <div
                className="apply-button"
                data-hackathon-slug="codeofduty.devfolio.co/"
                data-button-theme="light"
                style={{height: "44px", width: "312px", marginTop: "2rem"}}
            ></div>
        </div>

    )
}

export default Hackathon