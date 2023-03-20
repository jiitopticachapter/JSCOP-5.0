import React from 'react'
import './orgteam.scss'
import Heading from '../../components/heading/Heading';

function OrgTeam() {
  return (
    <>
      <Heading title="Organising Team" size="5rem"/>
      <div className="orgteam-section">
        {/* <h1 className='orgteam-title'>Organising Team</h1> */}
        <div className="orgteam-container">
          <div className="orgteam-grid-row">
            <figure className="orgteam-frame">
              <figcaption data-tooltip="Christopher Ware" data-side="bottom" tabIndex="0"><img alt="" src="https://jiitopticachapter.in/images/core%20team%20img/luv%20chadha.png" /></figcaption>
            </figure>
            <figure className="orgteam-frame">
              <figcaption data-tooltip="Christopher Ware" data-side="bottom" tabIndex="0"><img alt="" src="http://www.christopher-ware.com/CW_new/img/cw3.png" /></figcaption>
            </figure>
            <figure className="orgteam-frame">
              <figcaption data-tooltip="Christopher Ware" data-side="bottom" tabIndex="0"><img alt="" src="http://www.christopher-ware.com/CW_new/img/cw3.png" /></figcaption>
            </figure>
            <figure className="orgteam-frame">
              <figcaption data-tooltip="Christopher Ware" data-side="bottom" tabIndex="0"><img alt="" src="http://www.christopher-ware.com/CW_new/img/cw3.png" /></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrgTeam