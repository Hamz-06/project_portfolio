'use client'
import React, { useCallback, useEffect } from 'react'
import Cloud from '../Element/cloud';
import Image from 'next/image';
import myPicture from './face.png'
function LandingPage({ className }) {

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

    const generateCloud = useCallback(() => {

        const cloud = []
        for (let i = 0; i < 10; i++) {
            //spread out clouds on x axis by multiplying by 2
            const leftSide = i < 5 ? 1 : 2
            cloud.push(<Cloud key={i} leftSide={leftSide} />)
        }
        return cloud
    }, [])

    return (

        <div className={className}>

            {generateCloud()}
            {/* sun */}
            <div
                id='sun'
                className='lg:h-96 lg:w-96 bg-yellow-300 pointer-events-none rounded-full absolute z-10'
                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            >
            </div>
            <a className='bottom-0 absolute right-1/2 translate-x-1/2 mb-2 text-center'>Next js Web Dev - My Portfolio</a>
            {/* name */}
            <div className='flex flex-col md:flex-row justify-center h-full items-center mx-5 md:mx-40 flex-none z-10 relative'>
                <a className='text-4xl md:text-6xl font-extrabold text-black text-center z-20 mr-0 mb-5 sm:mb-0 sm:mr-5'>Mohammad <br />Hamzah Iqbal</a>
                <div className='w-[250px] h-[250px] relative flex-none'>
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