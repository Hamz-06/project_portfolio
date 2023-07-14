'use client'

import { PAGES } from '@/data/Data'


import myPicture from './face.png'

import Contacts from '../component/Contacts/Contacts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Cloud from '../component/Element/cloud'
import Image from 'next/image'
import Project from '../component/Element/project'


export default function Home(prop) {
  const currentPage = useSelector((state) => state.currentPage.currentPage)

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

  const portfolioData = [{
    title: 'Property Management System',
    description: 'A property management app with a built in chat system and a dashboard for the admin to manage the properties and the users.',
    techStack: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io'],
    githubLink: '/property-management-system',
    features: ['Chat system', 'Admin dashboard', 'User dashboard', 'Property management', 'User management'],
  }, {
    title: 'Charting App',
    description: 'A property management app with a built in chat system and a dashboard for the admin to manage the properties and the users.',
    techStack: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io'],
    githubLink: 'property-management-system-1',
    features: ['Chat system', 'Admin dashboard', 'User dashboard', 'Property management', 'User management'],
  }]
  return (

    <main id='main_page' className='h-screen w-screen snap-mandatory overflow-scroll snap-y'>

      <section className='snap-start  h-screen  bg-blue-400 inline-block  w-screen '>
        {/* cloud  */}

        {generateCloud()}
        {/* sun */}
        <div className='w-52 h-52 md:w-72 md:h-72 lg:h-96 lg:w-96 bg-yellow-300 pointer-events-none rounded-full top-0 right-1/2 translate-y-1/2 translate-x-1/2 absolute z-10'>
        </div>
        <a className='  bottom-0 absolute right-1/2 translate-x-1/2 mb-2 text-center' href="">React Web Dev - My Portfolio</a>
        {/* name */}
        <div className='flex flex-col md:flex-row justify-center h-full items-center mx-5 md:mx-40 flex-none z-10 relative'>
          <a className='text-4xl md:text-6xl font-extrabold text-black text-center z-20 mr-5'>Mohammad <br />Hamzah Iqbal</a>
          <div className='w-[250px] h-[250px] relative flex-none'>
            <Image
              src={myPicture}
              fill='responsive'
            />
          </div>

        </div>
        {/* <a className='text-2xl font-extrabold text-white absolute text-center top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>Web portfolio</a> */}

      </section>

      {/* section two  */}
      <section className='snap-start h-screen relative bg-red-300 w-screen'>
        <div className='w-[100%] h-[30%] sm:h-[50%] md:h-[70%] lg:h-[100%] bottom-0 absolute flex items-center justify-center overflow-hidden z-10 '>

          <svg viewBox="0 0 1280 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_115_23)">
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

      </section>

      {/* section three  */}
      <section className='snap-start h-screen  w-screen relative'>
        <div className='w-full h-full bg-[#CFF469] text-[#503658]
         z-50 absolute flex flex-col items-center justify-center min-h-[600px]'>
          <div className=' w-[95%] md:w-[70%] h-[600px] flex-none relative bg-red-600'>
            <a className='text-2xl font-medium'>My Projects</a>
            {
              portfolioData.map((data, index) => {
                return (
                  <Project data={data} index={index} />
                )
              })
            }
          </div>

        </div>
      </section>

    </main>


  )
}
