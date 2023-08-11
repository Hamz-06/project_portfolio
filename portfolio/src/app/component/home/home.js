'use client'
import React from 'react'

import myPicture from './face.png'


import { useEffect } from 'react'

import Cloud from '../Element/cloud'
import Image from 'next/image'
import ProjectList from '../Element/ProjectList'

import Contact from './Contact'

function Home({ projects }) {

    var projIndex = projects.length + 1

    useEffect(() => {
        const intersectionAtTopOrBottomElement = document.getElementById('contact');

        const elementHasIntersected = (entries, o) => {
            const isContact = entries[0].isIntersecting
        }
        const ioConfiguration = {
            /**
             * This rootMargin creates a horizontal line vertically centered
             * that will help trigger an intersection at that the very point.
             */
            rootMargin: '-50% 0% -50% 0%',

            /**
             * This is the default so you could remove it.
             * I just wanted to leave it here to make it more explicit
             * as this threshold is the only one that works with the above
             * rootMargin
             */
            threshold: 0
        };

        const observer = new IntersectionObserver(elementHasIntersected, ioConfiguration);
        observer.observe(intersectionAtTopOrBottomElement);
    }, [])

    const generateCloud = () => {

        const cloud = []
        for (let i = 0; i < 10; i++) {
            //spread out clouds on x axis by multiplying by 2
            const leftSide = i < 5 ? 1 : 2
            cloud.push(<Cloud key={i} leftSide={leftSide} />)
        }
        return cloud
    }

    const copyText = () => {

        navigator.clipboard.writeText('Hamzah1010@hotmail.co.uk');
    }

    return (

        <main id='main_page' className='h-screen w-screen tall:snap-none tall:overflow-visible snap-mandatory overflow-auto overflow-x-hidden snap-y '>

            <a className='fixed top-0 z-50 m-2'>v2</a>
            <section id='home' className='snap-start min h-screen min-h-[600px] bg-blue-400 inline-block   w-screen '>
                {/* cloud  */}

                {generateCloud()}
                {/* sun */}
                <div
                    id='sun'
                    className='lg:h-96 lg:w-96 bg-yellow-300 pointer-events-none rounded-full  absolute z-10'
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
                >
                </div>
                <a className='bottom-0 absolute right-1/2 translate-x-1/2 mb-2 text-center'>React Web Dev - My Portfolio</a>
                {/* name */}
                <div className='flex flex-col md:flex-row justify-center h-full items-center mx-5 md:mx-40 flex-none z-10 relative'>
                    <a className='text-4xl md:text-6xl font-extrabold text-black text-center z-20 mr-0 mb-5 sm:mb-0 sm:mr-5'>Mohammad <br />Hamzah Iqbal</a>
                    <div className='w-[250px] h-[250px] relative flex-none'>
                        <Image
                            alt='bs'
                            src={myPicture}
                            fill='responsive'
                        />
                    </div>

                </div>
                {/* <a className='text-2xl font-extrabold text-white absolute text-center top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>Web portfolio</a> */}

            </section>



            {/* section two  */}
            <section id='my-projects' className='snap-start h-screen min-h-[600px] w-screen relative' >
                <div className='w-full h-full bg-[#CFF469] text-[#503658]
           z-40 absolute flex flex-col items-center justify-center min-h-[600px]'>
                    <a className='text-4xl font-bold mb-5 flex-none'>My Projects</a>
                    <div className=' w-[95%] md:w-[70%] h-[60%] flex-none overflow-auto'>


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
                    </div>

                </div>
            </section>


            <Contact id='contact' className='snap-start h-screen min-h-[600px] z-10 relative  flex flex-col w-screen' />

            {/* section three  */}





        </main >


    )
}

export default Home