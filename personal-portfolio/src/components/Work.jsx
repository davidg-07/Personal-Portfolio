import React from 'react'
import WorkItem from './WorkItem';

const data = [
    {
        year: 2022,
        title: 'Student/Grad',
        duration: '6 Months',
        details: 'Learned both front and back end to be a full-stack Web Developer'
    }
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details} 
            />
        ))}
    </div>
  );
};

export default Work;