import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl  px-10 justify-evenly mx-auto items-center flex-shrink min-h-screen"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray text-2xl dark:text-black">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-72 xl:h-72"
        >
        <Image
          className='flex-shrink-0 object-cover'
          src={urlFor(pageInfo?.profilePic).url()}
          alt={pageInfo?.profilePicAlt}
          fill
          sizes='14rem, 16rem, 18rem, 20rem)'
        />
      </motion.div>
      <div className="relative space-y-1 px-0 md:px-10">
        <h4 className="relative text-4xl font-semibold text-center dark:text-black">A little about me</h4>
        <p className="relative text-base dark:text-black ">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;