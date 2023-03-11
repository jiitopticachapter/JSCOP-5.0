import React from 'react'
import { motion } from 'framer-motion'
import "./PageNotFound.scss"
const PageNotFound = () => {
    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}} 
      className='' 
      >
          <div id="background"></div>
<div className="top">
  <h1>404</h1>
  <h3>page not found</h3>
</div>

<div className="bottom">
  
  
  <div className="buttons">
    <button className="btn">Back</button>
    <button className="btn">Home</button>
  </div>
</div>


      </motion.div>
    )
}
  
export default PageNotFound