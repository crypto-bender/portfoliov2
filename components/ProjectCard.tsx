import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import Link from 'next/link'

type Props = {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#06c]/80' >
      <Link href={project.linkToBuild}>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true}}
        whileInView={{ opacity: 1, y: 0}}
        src={urlFor(project?.image).url()}
        alt={`${project?.title} main image`}
        className='w-[300px]  md:w-[400px]  xl:w-[600px] rounded-md object-contain flex-grow flex-shrink-0 max-w-[900px] max-h-[600px]'
      />
        </Link>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{project.title}</h4>
        <p className='text-2xl mt-1 font-semibold'>{project.summary}</p>
        <div className='flex space-x-2 my-2'>
          {project.technologies.map(technology => {
            return (
              <div className='flex group relative' key={technology._id}>
                  <img src={urlFor(technology?.image).url()} alt={`${technology?.title} icon`} width={32} height={32} />
                  <span className='group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto'>
                    {technology?.title}
                  </span>
                </div>
            )
          })}
        </div>
        <div>
          {/* tech stack */}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;