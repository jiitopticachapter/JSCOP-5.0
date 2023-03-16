import React from 'react'
import { motion } from 'framer-motion'
// import LandingPage from '../../components/LandingPage/LandingPage'
// import Quote from '../../components/Quote/Quote'
import Events from '../../components/Events/Events'
import Timeline from '../../components/Timeline/Timeline'
import Speakers from '../../components/Speakers/Speakers'
import Sponsors from '../../components/Sponsors/Sponsors'
import Hero from '../../components/Hero/Hero'
import Heading from '../../components/heading/Heading'
// import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
    return (
      <motion.div initial = {{opacity:0}} animate = {{opacity:1}} exit = {{opacity: 0}} transition = {{duration: 2}}
        className='' 
      >
        <Hero />
        <Heading title="EVENTS"/>
        <Events/>
        {/* <Heading title="QUOTE"/>
        <Quote/> */}
        <Heading title="TIMELINE"/>
        <Timeline/>
        <Heading title="SPEAKERS"/>
        <Speakers/>
        <Heading title="SPONSORS"/>
        <Sponsors/>
      </motion.div>
    )
}
  
export default Home