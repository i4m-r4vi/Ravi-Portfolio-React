import React from 'react'
import styles from './About.module.css'

const About = () => {       
  return (
    <div className={`${styles.about}`} id='about'>
        <h2 className='font-bold text-2xl'>About <span className={`${styles.me}`}>Me</span></h2>
        <div className={`${styles.about_container}`}>
            <div className={`${styles.about_img}`}>
                <img src="aboutprofile1.jpg" alt="ravisprofile" data-aos="zoom-in"/>
            </div>

            <div className={`${styles.about_text}`} data-aos="zoom-in" data-aos-duration="1000">
                <h3 className='font-bold text-xl'>Full Stack Developer</h3>
                <p>Hello! I'm a passionate MERN stack developer with a strong foundation in building dynamic and responsive web applications. I enjoy solving complex problems by crafting simple, efficient, and user-friendly solutions.</p>
                <p>With expertise in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB, I specialize in developing secure, scalable, and high-performance applications. My focus is on delivering seamless user experiences through clean code and modern development practices.</p>
                <a href="https://www.linkedin.com/in/i4m-r4vi/">See More</a>

            </div>

        </div>
    </div>


  )
}

export default About