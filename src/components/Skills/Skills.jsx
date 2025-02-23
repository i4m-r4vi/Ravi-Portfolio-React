import React from 'react'
import { tools } from './skills1.js'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <div className={`${styles.skills}`} id="skills">
            <h2 className='font-bold text-2xl'>My <span>Skills</span></h2>
            <div className={`${styles.skills_container}`}>
                <div className={`${styles.skills_cont} flex flex-col font-bold p-4 place-items-center justify-center `} data-aos="zoom-in">
                    <h2 className='text-center text-2xl'>Frontend</h2>
                    <div className='flex flex-wrap gap-4 justify-center py-6 max-w-96'>
                        {tools.frontend.map((text, i) => {
                            return (
                                <div key={i} className='flex flex-wrap border-2 p-2 w-fit rounded-lg cursor-pointer'>
                                    <img src={text.image} alt={text.text} width={"20px"} />
                                    <p className='px-2'>{text.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`${styles.skills_cont} flex flex-col font-bold`} data-aos="zoom-in">
                    <h2 className='text-center text-2xl p-4'>Backend</h2>
                    <div className='flex flex-wrap gap-4 justify-center py-6 px-3'>
                        {tools.backend.map((text, i) => {
                            return (

                                <div key={i} className='flex flex-wrap border-2 p-2 w-fit rounded-lg cursor-pointer'>
                                    <img src={text.image} alt={text.text} width={"20px"} />
                                    <p className='px-2'>{text.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`${styles.skills_cont} flex flex-col font-bold`} data-aos="zoom-in">
                    <h2 className='text-center text-2xl p-4'>Other Tools</h2>
                    <div className='flex flex-wrap gap-4 justify-center py-6 '>
                        {tools.otherTools.map((text, i) => {
                            return (
                                <div key={i} className='flex flex-wrap border-2 p-2 w-fit rounded-lg cursor-pointer'>
                                    <img src={text.image} alt={text.text} width={"20px"} />
                                    <p className='px-2'>{text.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Skills