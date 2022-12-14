import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next';
import { PageInfo, Skill, Social, Project } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import Footer from '../components/Footer';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  socials: Social[];
  projects: Project[];
}

export default function Home({pageInfo, skills, socials, projects}: Props) {

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y z-0 snap-proximity overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#06c]/80 dark:bg-slate-300">
      <Head>
        <title>Daniel Chu</title>
        <meta name='description' content='Software Engineer Daniel Chu created a portfolio website'/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Header socials={socials} />
      <section id="home" className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className='snap-start'>
        <About pageInfo={pageInfo} />
      </section>
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id="portfolio" className='snap-start'>
        <Projects projects={projects}/>
      </section>
      <section id='contactme' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    }
  }
}