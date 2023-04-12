import React from 'react'
import { motion } from 'framer-motion'
import Events from '../../components/Events/Events'
import Timeline from '../../components/Timeline/Timeline'
import Speakers from '../../components/Speakers/Speakers'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import './Home.scss'
import Sponsors from '../../components/Sponsors/Sponsors'


const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}
      className=''
    >
     
        <Hero />

        <div className="home">
        {/* <Heading2 title = "EVENTS"/> */}
        <Events />
        <Speakers />
        {/* <Timeline /> */}
        <Gallery/>
        <Sponsors />

        
      </div>
    </motion.div>
  )

}

export default Home