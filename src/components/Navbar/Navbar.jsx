import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { FaBarsStaggered } from "react-icons/fa6";
import HeroContent from '../Hero/HeroContent';
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header>
            <nav>
                <a href="https://i4m-r4vi.vercel.app/" className={styles.logo}>
                    Ravi <span>Shankar</span>
                </a>
             
                <ul 
                    className={`${navOpen ? styles.navon : ''}`}
                >
                    <li onClick={handleNav}><a href="#home">Home</a></li>
                    <li onClick={handleNav}><a href="#about">About Me</a></li>
                    <li onClick={handleNav}><a href="#skills">Skills</a></li>
                    <li onClick={handleNav}><a href="#studies">Studies</a></li>
                    <li onClick={handleNav}><a href="#projects">Projects</a></li>
                    <li onClick={handleNav}><a href="#contact">Contact</a></li>
                    <a href="https://www.linkedin.com/in/i4m-r4vi/" className={styles.hire_btn2} target='_blank'>Hire Me</a>
                </ul>


                <div className={styles.hire}>
                    <a href="https://www.linkedin.com/in/i4m-r4vi/" target='_blank'>Hire Me</a>
                </div>

                <motion.div 
                    id={styles.nav_icon} 
                    onClick={handleNav}
                    whileTap={{ scale: 0.8, rotate:90 }}
                >
                    {navOpen ? <FaTimes /> : <FaBarsStaggered />}
                </motion.div>
            </nav>
            
        </header>
    );
};

export default Navbar;
