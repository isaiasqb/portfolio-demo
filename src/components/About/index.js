import React from 'react';
import coverImg from '../../assets/cover/cover.jpg';
import avatarImg from '../../assets/avatar.jpg'

function About() {
  return (
    <section className='my-5'>
      <h1 id='about'>About Me</h1> 
      <img alt='a profile avatar' src={avatarImg} />
      {/* <img  alt='a decorative backdrop' src={coverImg} /> */}
      <p> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus accumsan auctor. In ut venenatis nisi. Fusce varius tincidunt scelerisque. Nullam ut tempus sem. Pellentesque posuere venenatis mauris non mollis. Donec euismod cursus accumsan. Proin tincidunt congue sem, sit amet blandit nunc condimentum id. Praesent eget pharetra metus. Vivamus vel mauris mollis, aliquet nisl id, accumsan odio. Suspendisse imperdiet elit vitae iaculis congue. Integer interdum maximus felis vitae finibus. Phasellus ac hendrerit velit, vel varius nunc. Integer ac nunc vel ex finibus pellentesque in id lacus. Quisque sit amet pharetra erat. Vestibulum in metus magna.
        Proin nec dui tincidunt, cursus felis vel, accumsan justo. Morbi blandit mauris magna, eget tempor ante luctus non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed varius justo a orci faucibus, nec vulputate nunc hendrerit. Nam volutpat ligula in dictum pharetra. Praesent ultricies, neque nec tincidunt consectetur, arcu magna auctor nisl, ac molestie turpis tellus sagittis eros. Sed varius, tortor vel commodo rhoncus, erat mi sollicitudin turpis, id fringilla arcu orci vel massa. Fusce eget augue et purus viverra suscipit in at nisi.
      </p>
    </section>
  )
}

export default About