'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Cloud from '../Element/cloud';
import Image from 'next/image';
import myPicture from './face.png'
import { useTransition, animated } from '@react-spring/web'

const GenerateCloud = () => {

    const cloud = []
    const isMobileRef = useRef({
        isMobile: false,
        isActivated: false
    })

    const updateCloud = (isMobile) => {
        const cloud = document.getElementsByClassName('cloud')


        if (isMobile) {
            for (let i = 4; i < cloud.length; i++) {
                cloud[i].style.display = 'none'
            }
        }
    }

    const cloudObservatory = () => {

        if (isMobileRef.current.isMobile && !isMobileRef.current.isActivated) {
            console.log('mobile')
            isMobileRef.current.isActivated = true
            updateCloud(true)
        } else if (!isMobileRef.current.isMobile && isMobileRef.current.isActivated) {
            console.log('desktop')
            isMobileRef.current.isActivated = false
            updateCloud(false)
        }

    }
    useEffect(() => {
        function updateSizeInfo() {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            if (width < 640) {
                isMobileRef.current.isMobile = true
            } else {
                isMobileRef.current.isMobile = false
            }
            cloudObservatory()
            // Display size information
            // console.log(JSON.stringify(isMobileRef));
        }
        updateSizeInfo()
        // Observe the body element
        window.addEventListener('resize', updateSizeInfo);
    }, [])

    for (let i = 0; i < 10; i++) {
        //spread out clouds on x axis by multiplying by 2
        const leftSide = i < 5 ? 1 : 2
        cloud.push(<Cloud key={i} leftSide={leftSide} />)
    }
    return cloud
}


function LandingPage({ className }) {

    const MyTitle = ({ className }) => {
        const ref = useRef([])
        const [items, set] = useState([])

        const transitions = useTransition(items, {
            from: {
                opacity: 0,

                transform: 'perspective(1px) rotateX(0deg)',
                color: '#28d79f',
            },
            enter: [
                { opacity: 1 },
                { transform: 'perspective(600px) rotateX(180deg)', color: '#c23369' },
                { transform: 'perspective(600px) rotateX(0deg)' },
                { outline: 'black' }
            ],

        })

        const reset = useCallback(() => {
            ref.current.forEach(clearTimeout)
            ref.current = []
            set([])
            ref.current.push(setTimeout(() => set(['Full Stack Dev']), 0))
            ref.current = []
            ref.current.push(setTimeout(() => set(['Mohammad hamzah Iqbal']), 5000))
        }, [])

        useEffect(() => {
            reset()
            return () => ref.current.forEach(clearTimeout)
        }, [])


        return (
            <React.Fragment>
                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div style={rest} className={className}>
                        <span className='hover:cursor-pointer' onClick={reset}>{item}</span>
                    </animated.div>
                ))}
            </React.Fragment>
        )
    }


    return (

        <div className={className}>

            <GenerateCloud />
            {/* sun */}
            <div
                id='sun'
                className='lg:h-96 lg:w-96 bg-yellow-300 pointer-events-none rounded-full absolute z-10'
                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            >
            </div>
            <a className='bottom-0 absolute right-1/2 translate-x-1/2 mb-2 text-center'>Built with Nextjs</a>
            {/* name */}
            <div className='flex flex-col md:flex-row justify-center items-center h-full w-full absolute top-0 flex-none'>
                <div className='w-96 h-28'>
                    <MyTitle className={'absolute w-96 text-center text-4xl md:text-6xl font-extrabold z-40 mr-0 sm:mb-0 sm:mr-5'} />
                </div>

                <div className='w-[250px] h-[250px] relative flex-none z-40'>
                    <Image
                        alt='profile picture'
                        src={myPicture}
                        fill='responsive'
                    />
                </div>

            </div>
            {/* <a className='text-2xl font-extrabold text-white absolute text-center top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>Web portfolio</a> */}
        </div>


    )
}

export default LandingPage