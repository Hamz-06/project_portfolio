'use client'
import React from 'react'

import myPicture from './face.png'


import { useEffect } from 'react'

import Cloud from '../Element/cloud'
import Image from 'next/image'
import ProjectList from '../Element/ProjectList'

function Home({ projects }) {

    var projIndex = projects.length + 1
    // const renderPage = () => {
    //   switch (currentPage.pagesHash) {
    //     case 'about-me':
    //       return (
    //         <AboutMe className='min-h-[100vh] h-auto absolute top-0 pt-[calc(var(--header-height-top)+var(--header-height-bottom))] w-full -z-10' />
    //       )
    //     case 'my-projects':
    //       return (
    //         <Projects className='min-h-[100vh] h-auto absolute top-0 pt-[calc(var(--header-height-top)+var(--header-height-bottom))] w-full -z-10' />
    //       )
    //     case 'my-contact':
    //       return (
    //         <Contacts className='min-h-[100vh] h-auto absolute top-0 pt-[calc(var(--header-height-top)+var(--header-height-bottom))] w-full -z-10' />
    //       )
    //   }
    // }

    // useEffect(() => {

    //   let road = document.getElementById('road');
    //   let boat = document.getElementById('boat')
    //   let main = document.getElementById('main_page')

    //   let pathPosition = road.getBoundingClientRect();
    //   let documentPosition = document.body.getBoundingClientRect();
    //   let pathTotalLength = road.getTotalLength();

    //   // console.log(totalLength)

    //   // let u = 0.5;
    //   // let p = road.getPointAtLength(u * totalLength);

    //   const positionElements = (e) => {
    //     console.log(main.scrollTop)
    //     const relativePageOffset = main.scrollTop + (window.innerHeight * .4);
    //     const height = document.body.getBoundingClientRect().height;

    //     const pointPercentage = relativePageOffset / pathPosition.height;
    //     const pointOnPath = pointPercentage * pathTotalLength;
    //     const pathPoint = road.getPointAtLength(pointOnPath);
    //     // console.log(pointPercentage)
    //     //   boat.style.transform = `translate(
    //     // 	${pathPosition.left + pathPoint.x}px,
    //     // 	${pathPosition.top + pathPoint.y}px
    //     // )`;
    //     boat.setAttribute("transform", `translate(${pathPoint.x - 70}, ${pathPoint.y - 60})`);

    //   }
    //   console.log(window.innerHeight)
    //   main.addEventListener("scroll", (e) => {
    //     positionElements(e);
    //   })



    //   return () => {
    //     main.removeEventListener("scroll", positionElements);
    //   };

    //   // boat.setAttribute("transform", `translate(${p.x}, ${p.y})`);
    // }, [])

    useEffect(() => {

    })

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
        var copyText = document.getElementById("email");
        const emailString = copyText.innerText
        navigator.clipboard.writeText(emailString);
    }

    return (

        <main id='main_page' className='h-screen w-screen snap-mandatory overflow-scroll snap-y '>

            <section id='home' className='snap-start  h-screen  bg-blue-400 inline-block  w-screen '>
                {/* cloud  */}

                {generateCloud()}
                {/* sun */}
                <div className='w-52 h-52 md:w-72 md:h-72 lg:h-96 lg:w-96 bg-yellow-300 pointer-events-none rounded-full top-0 right-1/2 translate-y-1/2 translate-x-1/2 absolute z-10'>
                </div>
                <a className='bottom-0 absolute right-1/2 translate-x-1/2 mb-2 text-center' >React Web Dev - My Portfolio</a>
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
            <section id='contact' className='snap-start h-screen font-bold  relative flex flex-col sm:flex-row bg-red-300 w-screen '>

                <div className='w-[100%] h-[30%] sm:h-[50%] md:h-[70%] lg:h-[100%] bottom-0 absolute flex items-center justify-center overflow-hidden z-10 '>

                    <svg viewBox="0 0 1280 832" className='w-full' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_115_23)">
                            <path d="M8.39374 442.076L-39 479.173V657H1404L1083.95 587.518L869.845 532.756L678.597 442.076L637.337 469.162L551.47 374.36L461.143 353.162L407.616 277.203L370.816 301.345L282.162 193L187.375 301.345V277.203L121.581 374.36V353.162L58.5753 414.401V383.782L8.39374 442.076Z" fill="#FE7777" />
                            <path d="M27.3313 518.774H-94V698H1378V403H1339.08L1181.7 461.443L1070.67 528.236L980.812 518.774L802.249 559.962H704.383L596.215 607.83H496.631L406.778 588.906L274 607.83L110.317 559.962L27.3313 518.774Z" fill="#AA5574" />
                            <path d="M83.9409 624.935L-112 597.801V880H1429V517L1368.11 578.505L1178.8 624.935L984.666 647.246L668.146 624.935L454.721 668.953H250.943L83.9409 624.935Z" fill="#16566F" />
                            <path d="M152.5 405.5L105.5 445.5L41 542.5L124 499.5H194L202.5 477H280L298.5 438L264 445.5L235.5 405.5V365.5L168.5 445.5L152.5 405.5Z" fill="#F6C09A" />
                            <path d="M304.5 308.5L288 227L368 318.5L264 425.5L294.5 352.5L304.5 308.5Z" fill="#F6C09A" />
                            <path d="M438.5 415L447 361L528.5 379L607 461L438.5 518.5L447 475.5L310 535.5L380.5 455L438.5 415Z" fill="#F6C09A" />
                            <path d="M1129 495L1013 527.5L862.5 617L1056 543.5H1141.5L1188 495L1255 417.5L1129 495Z" fill="#E57B92" />
                        </g>
                        <defs>
                            <clipPath id="clip0_115_23">
                                <rect width="1280" height="832" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                </div>
                {/* About me  */}
                <div className='basis-1/2 overflow-scroll flex flex-col items-center mt-10 z-40'>
                    <a className='text-4xl mt-10 sm:mt-0'>About Me</a>
                    <div>
                        <p className='m-5 sm:m-10 font-semibold text-center text ' >
                            I'm Hamzah, a recent graduate from City University. My area of expertise lies in creating web applications,I also have a strong understanding of object-oriented programming concepts. I thrive on learning new cutting-edge technologies like Next.js to bring my web application visions to life. The website you're currently exploring is a testament to my capabilities, as it was entirely developed by me using Next.js and React. If you couldn't tell already this website was Inspired by nature and fuelled by my adventurous spirit, I infused elements of both into its design.
                        </p>
                    </div>

                </div>
                {/* contact me */}
                <div className='basis-1/2 flex flex-col items-center mt-10 z-40'>
                    <a className='text-4xl'>Contact me</a>
                    <div className='grid w-full h-full grid-rows-3 sm:grid-rows-6 grid-cols-2 sm:grid-cols-1'>

                        <div className='m-auto sm:m-0 sm:my-auto sm:ml-5 text-center sm:text-left p-3'>
                            <div className='flex items-center'>
                                <a target='_blank' href='https://www.linkedin.com/in/hamzah-iqbal-/' className='text-3xl  bg-gradient-to-r
                         bg-clip-text text-black hover:text-transparent hover:from-blue-500 hover:to-blue-950 transition-all'>
                                    My Linkdeln
                                </a>
                                <a className='w-10 h-10  relative bg-blue-500 rounded-full p-2 ml-2 hidden sm:block'>
                                    <svg viewBox="0 0 512 512">
                                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div className='m-auto sm:m-0 sm:my-auto sm:ml-5 text-center sm:text-left p-3  group/email cursor-pointer' onClick={() => copyText()}>
                            <div className='flex items-center'>
                                <a className='text-3xl'>
                                    Email
                                </a>
                                <a className='w-10 h-10  relative bg-red-500 rounded-full p-2 ml-2 hidden sm:block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                                    </svg>

                                </a>
                            </div>
                            <a id='email' className='group-active/email:bg-red-400 transition-all [line-break:anywhere]'>Hamzah1010@hotmail.co.uk</a>

                        </div>
                        <div className='m-auto sm:m-0 sm:my-auto sm:ml-5 text-center sm:text-left p-3'>
                            <div className='flex items-center'>
                                <a target='_blank' href='https://www.linkedin.com/in/hamzah-iqbal-/' className='text-3xl bg-gradient-to-r
                         bg-clip-text text-black hover:text-transparent hover:from-purple-500 hover:to-purple-950 transition-all'>
                                    Github
                                </a>
                                <a className='w-10 h-10  relative bg-purple-500 rounded-full p-2 ml-2 hidden sm:block'>
                                    <svg viewBox="71 71 370 370">
                                        <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                                    </svg>
                                </a>
                            </div>


                        </div>


                    </div>
                </div>

                <div>
                    <a className='absolute bottom-0 left-1/2 z-40 -translate-x-1/2 mb-5 text-center'>Scroll down to see my projects</a>
                </div>

            </section >

            {/* section three  */}
            <section id='my-projects' className='snap-start h-screen  w-screen relative' >
                <div className='w-full h-full bg-[#CFF469] text-[#503658]
           z-40 absolute flex flex-col items-center justify-center min-h-[600px]'>
                    <a className='text-4xl font-bold mb-5 flex-none'>My Projects</a>
                    <div className=' w-[95%] md:w-[70%] h-[60%] flex-none overflow-scroll'>


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
            </section >

        </main >


    )
}

export default Home