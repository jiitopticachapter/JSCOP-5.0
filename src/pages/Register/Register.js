import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import "./Register.scss"
import PageName from '../../components/PageName/PageName'
import { useState } from 'react'
import registerImg from '../../assets/images/1.png'
// import axios from 'axios'
import "jquery-ui-dist/jquery-ui";
import {storage} from '../../firebase'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
// import { upload } from '@testing-library/user-event/dist/upload'
// import ComingSoon from '../../components/ComingSoon/ComingSoon'

const Register = () => {

   

   const [uploaded, setUploaded] = useState(false);
   const [filename, setFilename] = useState("PAYMENT SCREENSHOT");
   const [file, setFile] = useState(null);
   const [imgurl, setImgurl] = useState(''); //url of payment screenshot 

   const [data, setData] = useState({
      username: "",
      email: "",
      enrol: "",
      branch: "",
      year: "",
      mobile: "",
   })

   

   const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      setUploaded(true);
      console.log(e.target.files[0]);
      setFilename(e.target.files[0].name);
   }

   const handleChange = e => {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value
      })
      console.log(data);
   }

   useEffect(()=>{
      console.log(imgurl);
      console.log(data);
   },[imgurl,data]);

   const handlesubmit = (event) => {
      console.log(data)
      event.preventDefault();
      if (data && file) {

         const storageRef = ref(storage, `${data.enrol+"/"}`+file.name);
         const uploadTask = uploadBytesResumable(storageRef, file);
         uploadTask.on("state_changed", (snapshot) => {
          }, (error) => {
            console.log(error);
          },() => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
               alert("Screenshot uploaded successfully");
              setImgurl(downloadUrl);
            });
          }
        );

        const Form = {
         username: data.username,
      email: data.email,
      enrol: data.enrol,
      branch: data.branch,
      year: data.year,
      mobile: data.mobile,
      Paid: imgurl,
        }
        axios.post("https://jscop8-0.herokuapp.com/frontdata", Form) 
   .then (function () {
      window.location.href = "http://localhost:3000/";
   })
      }
   }

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
         className='register-page'>
         <PageName page_heading="REGISTER" visible="none" />
         <div className='register-form-container'>
            <form >
               <h1 className='register-heading'>Registration Form</h1>
               <fieldset>
                  <br />
                  <input type="text" name="username" value={data.username} onChange={handleChange} id="username" placeholder="NAME" required />
                  <br />
                  <input type="email" name="email" id="email" value={data.email} onChange={handleChange} placeholder="E-MAIL" required />
                  <br />
                  <input type="number" name="enrol" id="enroll" value={data.enrol} onChange={handleChange} placeholder="ENROLLMENT NUMBER" required />
                  <br />
                  <select name="branch" id="branch" value={data.branch} onChange={handleChange} required >
                     <option className="branch_dropdown" value="" selected disabled hidden>SELECT YOUR BRANCH</option>
                     <option className="branch_dropdown" value="CSE">CSE</option>
                     <option className="branch_dropdown" value="IT">IT</option>
                     <option className="branch_dropdown" value="ECE">ECE</option>
                     <option className="branch_dropdown" value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
                     <option className="branch_dropdown" value="CSE_INT">CSE INTEGRATED</option>
                     <option className="branch_dropdown" value="ECE_INT">ECE INTEGRATED</option>
                     <option className="branch_dropdown" value="BBA">BBA</option>
                     <option className="branch_dropdown" value="OTHER">OTHER</option>
                  </select>
                  <br />
                  <input type="text" name="year" id="year" value={data.year} onChange={handleChange} placeholder="YEAR" required />
                  <br />
                  <input type="number" name="mobile" id="Mob" value={data.mobile} onChange={handleChange} placeholder="MOBILE NUMBER" required />
                  <br />
                  <input type="file" id="screenshot" onChange={handleFileChange} style={{ display: "none" }} accept="image/*" required />
                  <label className='screenshot-label' htmlFor="screenshot"><i className={`fa-solid ${uploaded === true ? "fa-check check-color" : "fa-circle"} file-tick`}></i>{filename}</label>
                  <br /> <br />

                  <label htmlFor="submit"></label>
                  <input type="submit" name="submit" id="submit" onClick={handlesubmit} value="REGISTER" />
               </fieldset>
            </form>
            <div className="Register-Image">
               <img src={registerImg} alt=' ' />
            </div>
         </div>
         {/* <ComingSoon/> */}
      </motion.div>
   )
}

export default Register;