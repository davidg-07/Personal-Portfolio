import React from 'react'
import ProjectItem from './ProjectItem';
import weatherImg from '../images/weather.png'
import scheduleImg from '../images/schedule.png'
import notesImg from '../images/notes.png'
import textImg from '../images/text.png'


const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-4'>Hello</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={weatherImg} title='Weather App'/>
            <ProjectItem img={scheduleImg} title='Day Scheduler App'/>
            <ProjectItem img={notesImg} title='Note Taker App'/>
            <ProjectItem img={textImg} title='Text Editor App'/>
        </div>
    </div>
  )
}

export default Projects;