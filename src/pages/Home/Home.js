import React from 'react'
import { motion } from 'framer-motion'
// import LandingPage from '../../components/LandingPage/LandingPage'
// import Quote from '../../components/Quote/Quote'
import Events from '../../components/Events/Events'
import Timeline from '../../components/Timeline/Timeline'
import Speakers from '../../components/Speakers/Speakers'
import Sponsors from '../../components/Sponsors/Sponsors'
// import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}}
        className='' 
      >
      
        {/* <Quote/> */}
        <Events/>
        <Timeline/>
        <Speakers/>
        <Sponsors/>
      </motion.div>
    )
}
  
export default Home