'use client'
import React, { useState } from 'react'
import ProjectList from '../Element/ProjectList'

function ProjectAndBlogPage({ className, projects }) {
    var projIndex = projects.length + 1
    const sections = ['Projects', 'Blogs']
    const [currentSection, setCurrentSection] = useState('Projects')

    const changeSection = () => sections.find((section) => section !== currentSection)
    return (
        <div className={className}>
            <a className='text-4xl font-bold mb-1 flex-none'>My {currentSection}</a>

            <p
                className='mb-4'
                onClick={() => setCurrentSection(changeSection())}
            >
                Click me to check out my <a className='font-bold'>{changeSection()}</a>
            </p>
            {
                currentSection === 'Projects' ? <div className='w-[95%] md:w-[70%] h-[60%] flex-none overflow-auto'>
                    {
                        projects.map((project, index) => {
                            projIndex = projIndex - 1
                            return (
                                <div key={index}>
                                    <ProjectList data={project} index={projIndex} />
                                </div>
                            )
                        })
                    }
                </div> : <div className='w-[95%] md:w-[70%] h-[60%] flex items-center justify-center overflow-auto '>
                    <a className='underline underline-offset-2'>Coming Soon</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" ml-2 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>


                </div>
            }

        </div>
    )
}

export default ProjectAndBlogPage