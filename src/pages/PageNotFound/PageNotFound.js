import React from 'react'
import { motion } from 'framer-motion'

const PageNotFound = () => {
    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}} 
      className='' 
      >
          PageNotFound
      </motion.div>
    )
}
  
export default PageNotFound