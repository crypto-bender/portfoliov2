import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {
  const [ text, count] = useTypewriter({
    words: [
      "Hello",
      "Welcome to my website",
      "Follow the links below to navigate"
    ],
    loop: true,
    delaySpeed: 1000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      {/* replace img component with next.js image component later to optimize load */}
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt='its me!'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-white dark:text-black pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 dark:text-black'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#06c'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#portfolio">
            <button className='heroButton'>Portfolio</button>
          </Link>
          <Link href="#contactme">
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;