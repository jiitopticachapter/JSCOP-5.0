import React from 'react'
import WebTeamData from '../../assets/Data/WebTeamdata'
import Heading from '../heading/Heading'
import "./WebTeam.scss";


function WebTeam() {
  return (
    <div className="WebTeam">
    <Heading title="WEB TEAM" size="5rem" />
    <div className="WebTeam_wrapper">
    
    {WebTeamData.map((val,ind)=>{
        return(
            <div key={ind} className="WebTeam_container">
    <div className="WebTeam_card">
      <div className="WebTeam_imgBx">
        <img
          src={val.photo}
          alt=""
        />
      </div>
      <div className="WebTeam_content">
        <div className="WebTeam_contentBx">
          <h3>{val.name} <br /></h3>
        </div>
        <ul className="WebTeam_sci">
          <li>
            <a href={val.insta} target="_blank" rel="noreferrer" ><i class="fa-brands fa-instagram"></i> </a>
          </li>
          {/* <li>
            <a href="#/"><i class="fa-brands fa-github"></i> </a>
          </li> */}
          <li>
            <a href={val.linkedin} target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i> </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

        )
    })}
    
  </div>
  </div>
  )
}

export default WebTeam