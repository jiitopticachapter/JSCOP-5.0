import React from 'react'
import { motion } from 'framer-motion'
import Events from '../../components/Events/Events'
import Timeline from '../../components/Timeline/Timeline'
import Speakers from '../../components/Speakers/Speakers'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import ComingSoon from '../../components/ComingSoon/ComingSoon'
import './Home.scss'


const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
      className=''
    >
     
        <Hero />

        {/* <Heading title="EVENTS"/> */}
        <div className="home">
        {/* <Heading2 title = "EVENTS"/> */}
        <ComingSoon />
        <Speakers />
        <Events />
        {/* <Heading title="QUOTE"/>
        <Quote/> */}
        {/* <Heading2 title="TIMELINE" /> */}
        <Timeline />
        {/* <Heading2 title="SPEAKERS" /> */}
        <Gallery/>
        {/* <Heading2 title="SPONSORS" /> */}
        {/* <Sponsors /> */}
        
      </div>
    </motion.div>
  )

}

export default Home