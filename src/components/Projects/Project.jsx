import React from 'react'
import { projects } from './projects1.js'
import styles from './project.module.css'


const Project = () => {
    return (
        <div className={`${styles.projects} container mx-auto px-2 pt-4 pb-10`} id='projects'>
            <h2 className="text-3xl font-bold text-center mb-6">My <span className='text-[#F86F03]'>Projects</span></h2>
            <div className={`${styles.project_container} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6`}>
                {projects.map((project, index) => (
                    <div key={index} data-aos="zoom-in" className="w-96 bg-[#20003e] text-white shadow-lg rounded-lg overflow-hidden">
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
                        <div className="p-4 pt-2" >
                            <h3 className="text-xl font-semibold">{project.name}</h3>
                            <p className="text-white text-sm mb-3">{project.description}</p>
                            <a href={project.repo} target="_blank" className="text-blue-600 hover:underline">
                                View Repository
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            <div className={`${styles.more_project} hover:scale-105 transition-transform duration-300`}>
                <a href="https://github.com/i4m-r4vi?tab=repositories">View More</a>
            </div>
        </div>
    )
}
export default Project