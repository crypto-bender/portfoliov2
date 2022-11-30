import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='sticky-bottom text-center text-white dark:text-black pb-2'>
      <p className='font-semibold'>
        Daniel Chu © 2022
      </p>
    </div>
  )
}

export default Footer;