import React from 'react'
import { motion } from 'framer-motion'

const Register = () => {
    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}}
      className=''>
        Register
      </motion.div>
    )
}
  
export default Register