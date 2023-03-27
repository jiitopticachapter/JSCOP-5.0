import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Register.scss"
import PageName from '../../components/PageName/PageName'
import registerImg from '../../assets/images/1.png'
// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";

const Register = () => {
   
const [uploaded,setUploaded] = useState(false);

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
         className='register-page'>
         <PageName page_heading="REGISTER" visible="none"/>
         <div className='register-form-container'>
            <form method="post">
               <h1 className='register-heading'>Registration Form</h1>
               <fieldset>
                  <br />
                  <input type="text" name="username" id="username" placeholder="USERNAME" required  />
                  <br />
                  <input type="email" name="email" id="email" placeholder="E-MAIL" required />
                  <br />
                  <input type="enroll" name="enroll" id="enroll" placeholder="ENROLLMENT NUMBER" required />
                  <br />
                  <input type="branch" name="branch" id="branch" placeholder="BRANCH" required />
                  <br />
                  <input type="year" name="year" id="year" placeholder="YEAR" required />
                  <br />
                  <input type="Mob" name="Mob" id="Mob" placeholder="MOBILE NUMBER" required />
                  <br />
                  <input type="file" name="screenshot" id="screenshot" required />
                  {/* <label className='screenshot-label' htmlFor="screenshot"><i className={`fa-solid ${uploaded===false?"fa-check check-color":"fa-circle"} file-tick`}></i>PAYMENT SCREENSHOT</label> */}
                  <br /> <br />

                  <label htmlFor="submit"></label>
                  <input type="submit" name="submit" id="submit" value="REGISTER" />
               </fieldset>
            </form>
            <div className="Register-Image">
               <img src={registerImg} alt=' ' />
            </div>
         </div>
      </motion.div>
   )
}

export default Register