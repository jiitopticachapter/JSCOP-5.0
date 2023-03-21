import React from 'react'
import { motion } from 'framer-motion'
// import LandingPage from '../../components/LandingPage/LandingPage'
// import Quote from '../../components/Quote/Quote'
import Events from '../../components/Events/Events'
import Timeline from '../../components/Timeline/Timeline'
import Speakers from '../../components/Speakers/Speakers'
import Sponsors from '../../components/Sponsors/Sponsors'
import Hero from '../../components/Hero/Hero'
// import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
// import Heading2 from '../../components/heading/Heading2'

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
      className=''
    >
     
        <Hero />


        {/* <Heading title="EVENTS"/> */}
        <div className="home">
        {/* <Heading2 title = "EVENTS"/> */}
        <Events />
        {/* <Heading title="QUOTE"/>
        <Quote/> */}
        {/* <Heading2 title="TIMELINE" /> */}
        <Timeline />
        {/* <Heading2 title="SPEAKERS" /> */}
        <Speakers />
        {/* <Heading2 title="SPONSORS" /> */}
        <Sponsors />
      </div>
    </motion.div>
  )

}

export default Home