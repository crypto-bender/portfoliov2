import React from 'react'
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Tech = ({directionLeft, skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        className='relative rounded-full border border-gray-500  w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          className='rounded-full object-cover'
          src={urlFor(skill?.image).url()}
          alt={skill.imageAlt}
          fill
          sizes='6rem, 8rem'
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex flex-col items-center justify-center h-full'>
        <p className='text-xl font-bold text-black opacity-100'>
          {skill.title}
        </p>
        {!skill?.certificate ?
          null :
          <Link href={`${skill?.certificate}`}>
            <p className='text-xl font-bold text-black opacity-100 hover:underline'>
              Certified
            </p>
          </Link>
        }
        </div>
      </div>
    </div>
  )
}

export default Tech;