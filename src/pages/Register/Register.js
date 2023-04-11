import React from 'react'
import { motion } from 'framer-motion'
import "./Register.scss"
import PageName from '../../components/PageName/PageName'
// import {useState} from 'react'
// import registerImg from '../../assets/images/1.png'
// import axios from 'axios'
// import "jquery-ui-dist/jquery-ui";

import ComingSoon from '../../components/ComingSoon/ComingSoon'

const Register = () => {
   // const [data,setData]=useState({
   //    username:"",
   //    email:"",
   //    enrol:"",
   //    branch:"",
   //    year:"",
   //    mobile:""
   // })

   // const [uploaded,setUploaded] = useState(false);
   // const [filename,setFilename] = useState("PAYMENT SCREENSHOT");
   // const [file,setFile] = useState(null);

   // const handleFileChange = (e) =>{
   //    setFile(e.target.files[0]);
   //    setUploaded(true);
   //    console.log(e.target.files[0]);
   //    setFilename(e.target.files[0].name);
   // }

   // const handleChange=e=>{
   //    const {name,value}=e.target;
   //    setData({
   //       ...data,
   //       [name]:value
   //    })
   //    console.log(e);
   // }

   // const postData=async(e)=>{
   //    console.log(data)
   //    e.prevenDefault();
   //    if(data && file)
   //    {
   //       // react toastify notification of success
   //    }

   //    try{

   //      await axios.post("http://localhost:5001/user/register",{
   //          data
   //       }).then(res=>console.log(res));
   //    }
   //    catch(err){console.log("Eror in sending daa from f->b")

   //    }
   // }

   


   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
         className='register-page'>
         <PageName page_heading="REGISTER" visible="none"/>
         {/* <div className='register-form-container'>
            <form method="post">
               <h1 className='register-heading'>Registration Form</h1>
               <fieldset>
                  <br />
                  <input type="text" name="username" value={data.username}  onChange={handleChange} id="username" placeholder="NAME" required  />
                  <br />
                  <input type="email" name="email" id="email" value={data.email} onChange={handleChange} placeholder="E-MAIL" required />
                  <br />
                  <input type="number" name="enrol" id="enroll" value={data.enrol} onChange={handleChange} placeholder="ENROLLMENT NUMBER" required />
                  <br /> */} */
                  {/* <input type="text" name="branch" id="branch" value={data.branch} onChange={handleChange} placeholder="BRANCH" required /> */}
                  {/* <select name="branch" id="branch" value={data.branch} onChange={handleChange} required >
                     <option className="branch_dropdown" value="" disabled selected hidden>SELECT YOUR BRANCH</option>
                     <option  className="branch_dropdown" value="CSE">CSE</option>
                     <option  className="branch_dropdown" value="IT">IT</option>
                     <option  className="branch_dropdown" value="ECE">ECE</option>
                     <option  className="branch_dropdown" value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
                  </select> */}
                  {/* <br />
                  <input type="text" name="year" id="year" value={data.year} onChange={handleChange} placeholder="YEAR" required />
                  <br />
                  <input type="number" name="mobile" id="Mob" value={data.mobile} onChange={handleChange} placeholder="MOBILE NUMBER" required />
                  <br />
                  <input type="file" id="screenshot" onChange={handleFileChange} style={{display:"none"}} accept="image/*" required />
                  <label className='screenshot-label' htmlFor="screenshot"><i className={`fa-solid ${uploaded===true?"fa-check check-color":"fa-circle"} file-tick`}></i>{filename}</label>
                  <br /> <br />

                  <label htmlFor="submit"></label>
                  <input type="submit" name="submit" id="submit" onClick={postData} value="REGISTER" />
               </fieldset>
            </form> */}
            {/* <div className="Register-Image">
               <img src={registerImg} alt=' ' />
            </div>
         </div> */}
         <ComingSoon/>
       </motion.div>
   )
}

export default Register