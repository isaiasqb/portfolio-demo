import React from 'react';
import projectImg from '../../assets/projects/0.png'

function Portfolio() {

  const projects = 
  [
    {
      index: 0,
      name: 'Weather Finder',
      url: 'https://isaiasqb.github.io/weather-finder/',
      descrption: 'A weather application',
      url: '../../assets/projects/0.png'
    },
    { 
      index: 1,
      name: 'Taskinator',
      url: 'https://isaiasqb.github.io/weather-finder/',
      descrption: 'A weather application',
      url: '../../assets/projects/1.png'
    },
    { 
      index: 2,
      name: 'Taskinator',
      url: 'https://isaiasqb.github.io/taskinator/',
      descrption: 'A To Do list application',
      url: '../../assets/projects/2.png'
    },
    { 
      index: 3,
      name: 'Day Scheduler',
      url: 'https://isaiasqb.github.io/day-scheduler/',
      descrption: 'A task scheduler app',
      url: '../../assets/projects/3.png'
    },
  ];


  return (
    <section>
      <h1>My Portfolio</h1>
      <p>Some examples of my most recent projects</p>
      <img 
      src={projectImg}
      alt='example of a project'
      className="img-thumbnail mx-1"
      />
    </section>
  );
}
export default Portfolio;