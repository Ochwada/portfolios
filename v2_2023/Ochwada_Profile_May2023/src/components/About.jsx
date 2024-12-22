import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />

          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        

        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}> About Me.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] pl-3 '
      >
        I'm a geoinformatics expert specializing in spatial/data analysis
        and visualization, driven by the merging of technology and the natural world.

        Currently, I serve as an AI Product evangelist, sharing my passion
        for the potential of artificial intelligence. Through harnessing
        advanced technologies like machine learning, we can tackle pressing
        challenges. In this role, I combine my technical expertise with love
        for communication and education, always seeking new ways to share
        the power of AI.

        I enjoy anime, coding, travel, and quality time with my family when
        not evangelizing or networking.
      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")