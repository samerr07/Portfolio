import {  motion } from 'framer-motion'
import React from 'react'
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai"

const Services = () => {

    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity : 1
        },
        one : {
            x:"-100%",
            opacity:0
        },
        twoAndthree: {
            y:"-100%",
            opacity:0
        },
        four : {
            opacity:0,
            y : "100%"
        }
    }
  return (
    <div id='services'>
      <h2>Services</h2>
      <section>
      <motion.div className='serviceBox1'
        whileInView={animations.whileInView}
        initial={animations.one}
      >
        <h3>5+</h3>
        <p>Years Experience</p>
      </motion.div>
      <motion.div className='serviceBox2'
        whileInView={animations.whileInView}
        initial={animations.twoAndthree}
      >
        <AiFillIeCircle/>
        <span>Web Development</span>
      </motion.div>
      <motion.div className='serviceBox3'
        whileInView={animations.whileInView}
        initial={animations.twoAndthree}
      >
        <AiFillAndroid/>
        <span>Android Development</span>
      </motion.div>
      <motion.div className='serviceBox4'
        whileInView={animations.whileInView}
        initial={animations.four}
      >
        <AiFillWindows/>
        <span>Desktop Development</span>
      </motion.div>
      </section>
    </div>
  )
}

export default Services
