import React from 'react'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Project } from '../typings';

type Props = {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-left md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white dark:text-black text-2xl">
        Projects
      </h3>
      <div className='w-full h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#06c]/80'>
        {projects.map((project)=>{
          return (
            <ProjectCard
              project={project}
              key={project._id}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default Projects;