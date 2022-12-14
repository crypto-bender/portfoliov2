import React from 'react'
import { motion } from 'framer-motion'
import Tech from './Tech';
import { Skill } from '../typings';

type Props = {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white dark:text-black text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-4 gap-4'>
        {skills.map((skill)=> {
          return (
            <Tech key={skill._id} skill={skill} />
          )
        })}

      </div>
    </motion.div>
  );
}

export default Skills;