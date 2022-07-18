import React from 'react';

import avatarImg from '../../assets/avatar.jpg'

function About() {
  return (
    <section>
      <h1 id='about' className='my-p-2'>About Me</h1> 
      <div className='flex-row space-around '>
      <img alt='a profile avatar' className='avatar' src={avatarImg} />

      <p className='w40'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus accumsan auctor. In ut venenatis nisi. Fusce varius tincidunt scelerisque. Nullam ut tempus sem. Pellentesque posuere venenatis mauris non mollis. Donec euismod cursus accumsan. Proin tincidunt congue sem, sit amet blandit nunc condimentum id. Praesent eget pharetra metus. Vivamus vel mauris mollis, aliquet nisl id, accumsan odio. Suspendisse imperdiet elit vitae iaculis congue. Integer interdum maximus felis vitae finibus. Phasellus ac hendrerit velit, vel varius nunc. Integer ac nunc vel ex finibus pellentesque in id lacus. Quisque sit amet pharetra erat. Vestibulum in metus magna.
       </p>
      </div>
    </section>
  )
}

export default About