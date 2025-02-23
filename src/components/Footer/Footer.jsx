import React from 'react'
import styles from './footer.module.css'
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={`${styles.lastline}`}>
            <p className='flex items-center justify-center'>
                <div className='mr-2'>
                    <FaHeart fill='red'></FaHeart>
                </div> 
                Designed By <span className={`${styles.span} ml-1`}>Ravishankar</span>
            </p>
        </footer>
    )
}

export default Footer