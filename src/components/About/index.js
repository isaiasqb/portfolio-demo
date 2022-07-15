import React from 'react';
import coverImg from '../../assets/cover/cover.jpg';
import avatarImg from '../../assets/avatar.jpg'

function About() {
  return (
    <section className='my-5'>
      <h1 id='about'>About Me</h1> 
      <img src={avatarImg} />
      <img src={coverImg} />
    </section>
  )
}

export default About