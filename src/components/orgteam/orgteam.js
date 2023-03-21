import React from 'react'
import './orgteam.scss'
import Heading from '../../components/heading/Heading';
// import { useEffect, useState } from 'react';

function OrgTeam({Team}) {

  

  // const [team,setTeam] = useState({});

  // useEffect(()=>{
  //   setTeam(Team);
  //   console.log(Team);
  // },);

  return (
    <>
      <Heading title="Organising Team" size="5rem"/>
      <div className="orgteam-section">
        {/* <h1 className='orgteam-title'>Organising Team</h1> */}
        <div className="orgteam-container">
          <div className="orgteam-grid-row">

            {/* {team.map((val,ind)=>{
              return (
                <figure key={ind} className="orgteam-frame">
                  <figcaption data-tooltip={val.name} data-side="bottom" tabIndex="0"><img alt="" src={val.imgsrc} /></figcaption>
                </figure>
              )
            })} */}
            
            <figure className="orgteam-frame">
              <figcaption data-tooltip="Christopher Ware" data-side="bottom" tabIndex="0"><img alt="" src="http://www.christopher-ware.com/CW_new/img/cw3.png" /></figcaption>
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