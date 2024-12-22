
import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, spring } from 'framer-motion';


import { styles } from '../styles';
import { github, web } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

/* const ProjectCard = ({ project}) => {
console.log('Coming from Project Card', project);

  return (
    <div>
    <h1>{projects.name}</h1>
      <p>  My Projects </p>
    </div>
  )
} */

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {

  console.log('projects', projects);

  console.log(index)
  return (

    <motion.div>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360PX] w-full ">
        <div className='relative w-full h-[230px] '>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(website_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={web}
                alt="web"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[22px]'>{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description.length > 175 ? description.substring(0, 175) + "..." : description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  const [loadmore, setLoadmore] = useState(false)

  const loadMore = () => {
    setLoadmore(true)
    setDisplayData(projects);
    console.log("Loading clicked")
  }
  console.log("current load more state:", loadmore)

  const [displayData, setDisplayData ] = useState(projects.slice(0, 3))

  // const displayData = loadmore ? projects : projects.slice(0, 3) //display only 3 data

  console.log(displayData, 'this is coming from works')
  //console.log(typeof displayData)
  console.log('Data from Projects', projects)


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>A Journey Through My Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Code Chronicles.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Welcome to - A Journey Through My Projects - You will find a selection
          of my work right here, each representing the passion and commitment I
          put into it. Each project highlights particular difficulties overcame
          and abilities improved. They show off my skills on their own, but
          when combined, they show how far I've come as a professional.
          I encourage you to look over these achievements, which show my dedication
          to lifelong learning and the pursuit of excellence.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>


        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}

        {displayData.map((project, index) => {
          console.log(`Rendering project at index ${index}:`, project);
          console.log(project, 'from displayData map')

          //return  <ProjectCard index={index} project={project} />

          return <ProjectCard key={`project-${index}`} index={index} {...project} />

        })}

      </div>
      <div className='mt-10 gap-5 flex flex-col items-center'>
                <button className="violet-gradient uppercase text-xs hover:bg-blue-500 text-white  py-2 px-2 border-b-4 border-blue-700 hover:border-blue-400 rounded" onClick={loadMore} >
                    Load More Projects
                </button>
            </div>

    </>
  )
}

export default SectionWrapper(Works, "portfolio")