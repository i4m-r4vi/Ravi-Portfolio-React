import { React, useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Typed from "typed.js";
import '../../index.css'


const HeroContent = () => {
    const spanText = useRef(null);
    useEffect(() => {
        const typed = new Typed(spanText.current, {
            strings: ['FRONTEND DEVELOPER','BACKEND DEVELOPER', 'CYBER SECURITY RESEARCHER'],
            typeSpeed: 30,
            backSpeed: 30,
            loop: true,
        })
        AOS.init({ duration: 1000 })
        return () => {
            typed.destroy();
          };
    }, [])
    return (
        <div className={`${styles.banner_container} lg:container bg-[#31065A] h-screen flex mx-auto text-white items-center`}>
            <div className={`${styles.text} py-36 ml-auto lg:w-1/3`} data-aos="fade-down" data-aos-duration="10000">
                <p className={`${styles.hi1}`}>Hi, It's me</p>
                <h2 className={`${styles.h1} font-bold text-2xl`}>RAVI SHANKAR</h2>
                <p>And I'm a <span className={`${styles.position}`} ref={spanText} /></p>
                <p className={`${styles.para}`}>I use my skills to build strong, scalable web applications that provide high-quality solutions for today's businesses.</p>
                <div className={`${styles.social}`}>
                    <a href="https://github.com/i4m-r4vi" target="_blank"><FaGithub className={`${styles.i}`} /></a>
                    <a href="https://www.instagram.com/cyber_r4vi/" target="_blank"><FaInstagram className={`${styles.i}`} /></a>
                    <a href="https://x.com/cyber_r4vi" target="_blank"><FaXTwitter className={`${styles.i}`} /></a>
                </div>
                <a href="https://drive.google.com/file/d/1F1TUX_rMTNQNIX8yFlWpe2a4toY1ZMnE/view?usp=sharing" target='_blank' className={`${styles.down_cv}`}>Download CV</a>
            </div>
            <img src="Bannerimage.png" alt="" className="hidden lg:block mr-auto" data-aos="fade-up"/>
        </div>
    )
}

export default HeroContent