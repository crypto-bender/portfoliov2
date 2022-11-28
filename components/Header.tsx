import React from 'react';
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[];
}

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7x1 p-5 mx-auto z-30">
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className="flex flex-row items-center"
      >
        <Link href="#/">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src='https://res.cloudinary.com/dxhzukgow/image/upload/v1668623212/Circle-crop-fullres_gaerac.png'
                alt=''
              />
            </div>
          </footer>
        </Link>
      </motion.div>
      {/* <Link href="#contactme"> */}
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
          {socials?.map((social) => {
            return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />)
          })}
          <SocialIcon
            url='#contactme'
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <Link href="#contactme">
            <p className="uppercase hidden md:inline-flex fext-sm text-gray-400">
              Get in Touch
            </p>
          </Link>
        </motion.div>
      {/* </Link> */}
    </header>
  );
}

export default Header;