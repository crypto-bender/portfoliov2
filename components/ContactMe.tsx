import React, { useState } from 'react'
import Link from 'next/link';
import Footer from './Footer';
type Props = {}

const ContactMe = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    window.location.href = `mailto:danielalexchu@gmail.com?subject=${subject}&body=Hi, my name is ${name}.  ${message}. (${email})`;
  }

  return (
    <>
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-white dark:text-black text-2xl">
          Contact Me
        </h3>
        <div className='flex flex-col space-y-10'>
          <h4 className='text-4xl font-semibold text-center dark:text-black'>
            Looking for the perfect candidate? Send me a message!
          </h4>
          <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit}>
            <div className='flex space-x-2'>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                className='contactInput'
                />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className='contactInput'
                />
            </div>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className='contactInput'
              placeholder='Subject'
              />
            <input
              type="textarea"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Message"
              className='contactInput'
              />
            <button className='bg-[#06c] py-5 px-10 rounded-md text-white font-bold transition-all hover:border-[#F7AB0A]/40'>Submit</button>
          </form>
          <h5 className='dark:text-black'>
            Got a time sensitive project that needs immediate attention? Message on
            <span>
              <Link className='cursor-point hover:underline pl-1 font-bold' href='https://linkedin.com/in/chuda'>LinkedIn!</Link>
            </span>
          </h5>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default ContactMe;