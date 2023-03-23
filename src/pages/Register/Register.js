import React from 'react'
import { motion } from 'framer-motion'
import "./Register.scss"
import PageName from '../../components/PageName/PageName'
import img from '../../assets/images/Register.png'
// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";

const Register = () => {

    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}}
      className=''>
         <PageName page_heading="Register"/>

   
      <div id="container">
      
         <form method="post">
            <fieldset>
               <br/>
               <input type="text" name="username" id="username" placeholder="Username" required autofocus/>
               <br/><br/>
               <input type="email" name="email" id="email" placeholder="E-mail" required/>
               <br/><br/>
               <input type="enroll" name="enroll" id="enroll" placeholder="Enrollmet Number" required/>
               <br/><br/>
               <input type="branch" name="branch" id="branch" placeholder="Branch" required/>
               <br/><br/>
               <input type="year" name="year" id="year" placeholder="Year" required/>
               <br/><br/>
               <input type="Mob" name="Mob" id="Mob" placeholder="Mobile Number" required/>
               <br/> <br/> <br/>
            
               <label htmlFor="submit"></label>
               <input type="submit" name="submit" id="submit" value="REGISTER"/>
            </fieldset>
         </form>
         <div className="Register-Image">
            <img src = {img} alt=' '/>

         </div>
      </div>
      </motion.div>
    )
}
  
export default Register