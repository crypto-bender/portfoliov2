import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row-max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        // src="https://res.cloudinary.com/dxhzukgow/image/upload/v1668617123/PXL_20220514_015957754_1_v7jsti.jpg"
        alt=""
        className="mt-5 -mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold text-center">A little about me</h4>
        <p className="text-base">
          {pageInfo.backgroundInformation}
          {/* Hello! I am a Software Engineer with a passion for learning, building,
          growing, and teaching. I enjoy the process of problem solving to
          creatively find solutions. I am skilled in JavaScript, TypeScript,
          React, Web Design, and Systems Design. I love playing video games,
          cooking, and exploring new hobbies. My wife and I recently welcomed
          our first child into the world and it lit a fire in me to start making
          more of myself so I could share it with my family. If you would like
          to converse on any subject, lets connect! */}
        </p>
      </div>
    </motion.div>
  );
}

export default About;