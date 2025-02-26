import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={`${styles.about} mx-auto`} id='about'>
      <h2 className='font-bold text-2xl text-center py-4'>About <span className={`${styles.me}`}>Me</span></h2>
      <div className={`block lg:flex items-center py-20 lg:py-10 lg:h-screen `}>
        <div className={`${styles.about_img} lg:w-1/2 m-auto `}>
          <img src="aboutprofile1.jpg" alt="ravisprofile" data-aos="zoom-in"/>
        </div>

        <div className={`${styles.about_text} text-center m-auto lg:w-1/3 lg:text-left mr-auto`} data-aos="zoom-in" data-aos-duration="1000">
          <h3 className='font-bold text-xl py-4'>Full Stack Developer</h3>
          <p className='leading-7 p-4 lg:p-0'>Hello! I'm a passionate MERN stack developer with a strong foundation in building dynamic and responsive web applications. I enjoy solving complex problems by crafting simple, efficient, and user-friendly solutions.</p>
          <p className='leading-7 p-4 lg:p-0'>With expertise in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, I specialize in developing secure, scalable, and high-performance applications. My focus is on delivering seamless user experiences through clean code and modern development practices.</p>
          <span className='mt-4 lg:mt-6 block'>
            <a href="https://www.linkedin.com/in/i4m-r4vi/" className='bg-white text-[#170550] rounded-full px-5 py-2.5'>See More</a>
          </span>
        </div>
      </div>
    </div>


  )
}

export default About
