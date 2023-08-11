'use client'
import { cn } from '@/util/util'
import React, { useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import jpmorgan from '../Element/jpmorgan.jpeg'
import wthree from '../Element/wthree.png'
import aws from '../Element/aws.jpeg'
{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev/svgjs" width="100%" height="100%"><defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
<feTurbulence type="fractalNoise" baseFrequency="0.102" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
<feSpecularLighting surfaceScale="15" specularConstant="0.75" specularExponent="20" lighting-color="#a98ad2" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
    <feDistantLight azimuth="3" elevation="100"></feDistantLight>
</feSpecularLighting>

</filter></defs><rect width="100%" height="100%" fill="#d5ff00ff"></rect><rect width="100%" height="100%" fill="#a98ad2" filter="url(#nnnoise-filter)"></rect></svg> */}


function Contact({ className, id }) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
        {
            section: 'About Me',
            primaryColor: '#d5ff00ff',
            noisePrimaryColor: '#a98ad2',
            backgroundColor: '#d5ff00ff',
            description: ["I'm Hamzah, a recent graduate from City University. My area of expertise lies in creating web applications,I also have a strong understanding of object-oriented programming concepts. I thrive on learning new cutting-edge technologies like Next.js to bring my web application visions to life. The website you're currently exploring is a testament to my capabilities, as it was entirely developed by me using Next.js and React. If you couldn't tell already this website was Inspired by nature and fuelled by my adventurous spirit, I infused elements of both into its design."],


        },
        {
            section: 'certificates',
            primaryColor: '#ff7c00ff',
            noisePrimaryColor: '#ff006d',
            backgroundColor: '#d5ff00ff',
            description: ["•Virtual internship with JP morgan - 2021", "•W3S javascript certificate  - 2022", "•Working towards AWS cloud practitioner certificate - 2023"],
            certificateImage: [jpmorgan, wthree, aws]
        },

    ]

    return (
        <section id={id} className={cn(className,)}>

            <div className='z-10 absolute bottom-0 flex flex-row right-1/2 translate-x-1/2 -translate-y-1/2'>

                <div className='flex items-center'>
                    <a className='w-10 h-10  relative bg-blue-500 rounded-full p-2 ml-2  sm:block'>
                        <svg viewBox="0 0 512 512">
                            <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                        </svg>
                    </a>
                </div>


                <div onClick={() => copyText()} className='flex items-center'>
                    <a className='w-10 h-10  relative bg-red-500 rounded-full p-2 ml-2  sm:block'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                        </svg>

                    </a>
                </div>

                <div className='flex items-center'>
                    <a className='w-10 h-10  relative bg-purple-500 rounded-full p-2 ml-2  sm:block'>
                        <svg viewBox="71 71 370 370">
                            <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* background  */}
            <div className='w-full h-full absolute flex items-center justify-center'>

                <svg className='absolute w-full h-full' xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev/svgjs" width="100%" height="100%"><defs>
                    <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
                        <feTurbulence type="fractalNoise" baseFrequency="0.102" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                        <feSpecularLighting surfaceScale="15" specularConstant="0.75" specularExponent="20" style={{ lightingColor: slides[currentSlide].noisePrimaryColor }} x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                            <feDistantLight azimuth="3" elevation="100"></feDistantLight>
                        </feSpecularLighting>
                    </filter>
                </defs>
                    <rect width="100%" height="100%" style={{ fill: slides[currentSlide].primaryColor }}>
                    </rect>
                    <rect width="100%" height="100%" fill="#a98ad2" filter="url(#nnnoise-filter)">

                    </rect>
                </svg>
                <svg className='w-full h-full absolute' xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
                    <g transform="matrix(0.27563735581699916,-0.9612616959383189,0.9612616959383189,0.27563735581699916,-317.7596207021272,521.2497360485279)">
                        <polygon points="800,612 612,988 988,988" strokeWidth="4" stroke="#ff3895" fill="none" opacity="0.1" transform="rotate(100, 344, 512)">
                        </polygon>
                        <polygon points="791.55,592.9499969482422 604.5,967.0499969482422 978.6,967.0499969482422" strokeWidth="4.2" stroke="#fc3c99" fill="none" opacity="0.1225" transform="rotate(96.55, 344, 512)">
                        </polygon>
                        <polygon points="783.1,573.8999938964844 597,946.0999938964844 969.1999999999999,946.0999938964844" strokeWidth="4.4" stroke="#fa409c" fill="none" opacity="0.14500000000000002" transform="rotate(93.1, 344, 512)">
                        </polygon>
                        <polygon points="774.65,554.8500061035156 589.5,925.1500061035156 959.8000000000001,925.1500061035156" strokeWidth="4.6" stroke="#f7449f" fill="none" opacity="0.1675" transform="rotate(89.65, 344, 512)">
                        </polygon>
                        <polygon points="766.2,535.8000030517578 582,904.2000030517578 950.4,904.2000030517578" strokeWidth="4.8" stroke="#f447a3" fill="none" opacity="0.19" transform="rotate(86.2, 344, 512)">
                        </polygon>
                        <polygon points="757.75,516.75 574.5,883.25 941,883.25" strokeWidth="5" stroke="#f24ba6" fill="none" opacity="0.2125" transform="rotate(82.75, 344, 512)">
                        </polygon>
                        <polygon points="749.3,497.6999969482422 567,862.2999969482422 931.6,862.2999969482422" strokeWidth="5.2" stroke="#ef4ea9" fill="none" opacity="0.23500000000000001" transform="rotate(79.3, 344, 512)">
                        </polygon>
                        <polygon points="740.85,478.6499938964844 559.5,841.3499938964844 922.1999999999999,841.3499938964844" strokeWidth="5.4" stroke="#ec51ac" fill="none" opacity="0.2575" transform="rotate(75.85, 344, 512)">
                        </polygon><polygon points="732.4,459.6000061035156 552,820.4000061035156 912.8000000000001,820.4000061035156" strokeWidth="5.6" stroke="#e954af" fill="none" opacity="0.28" transform="rotate(72.4, 344, 512)"></polygon><polygon points="723.95,440.5500030517578 544.5,799.4500030517578 903.4,799.4500030517578" strokeWidth="5.8" stroke="#e657b2" fill="none" opacity="0.3025" transform="rotate(68.95, 344, 512)"></polygon><polygon points="715.5,421.5 537,778.5 894,778.5" strokeWidth="6" stroke="#e35ab5" fill="none" opacity="0.32499999999999996" transform="rotate(65.5, 344, 512)"></polygon><polygon points="707.05,402.4499969482422 529.5,757.5499969482422 884.6,757.5499969482422" strokeWidth="6.2" stroke="#e05cb8" fill="none" opacity="0.34750000000000003" transform="rotate(62.05, 344, 512)"></polygon><polygon points="698.6,383.3999938964844 522,736.5999938964844 875.1999999999999,736.5999938964844" strokeWidth="6.4" stroke="#dd5fbb" fill="none" opacity="0.37" transform="rotate(58.599999999999994, 344, 512)"></polygon><polygon points="690.15,364.3500061035156 514.5,715.6500061035156 865.8000000000001,715.6500061035156" strokeWidth="6.6" stroke="#da62be" fill="none" opacity="0.39249999999999996" transform="rotate(55.15, 344, 512)"></polygon><polygon points="681.7,345.3000030517578 507,694.7000030517578 856.4,694.7000030517578" strokeWidth="6.800000000000001" stroke="#d764c1" fill="none" opacity="0.41500000000000004" transform="rotate(51.699999999999996, 344, 512)"></polygon><polygon points="673.25,326.25 499.5,673.75 847,673.75" strokeWidth="7" stroke="#d467c4" fill="none" opacity="0.4375" transform="rotate(48.25, 344, 512)"></polygon><polygon points="664.8,307.1999969482422 492,652.7999969482422 837.6,652.7999969482422" strokeWidth="7.2" stroke="#d169c6" fill="none" opacity="0.45999999999999996" transform="rotate(44.8, 344, 512)"></polygon><polygon points="656.35,288.1499938964844 484.5,631.8499938964844 828.1999999999999,631.8499938964844" strokeWidth="7.4" stroke="#ce6bc9" fill="none" opacity="0.48250000000000004" transform="rotate(41.349999999999994, 344, 512)"></polygon><polygon points="647.9,269.1000061035156 477,610.9000061035156 818.8000000000001,610.9000061035156" strokeWidth="7.6" stroke="#ca6dcc" fill="none" opacity="0.505" transform="rotate(37.9, 344, 512)"></polygon><polygon points="639.45,250.0500030517578 469.5,589.9500030517578 809.4,589.9500030517578" strokeWidth="7.800000000000001" stroke="#c770ce" fill="none" opacity="0.5275" transform="rotate(34.45, 344, 512)"></polygon><polygon points="631,231 462,569 800,569" strokeWidth="8" stroke="#c472d1" fill="none" opacity="0.5499999999999999" transform="rotate(31, 344, 512)"></polygon><polygon points="622.55,211.9499969482422 454.5,548.0499969482422 790.6,548.0499969482422" strokeWidth="8.2" stroke="#c074d3" fill="none" opacity="0.5725" transform="rotate(27.549999999999997, 344, 512)"></polygon><polygon points="614.1,192.89999389648438 447,527.0999938964844 781.1999999999999,527.0999938964844" strokeWidth="8.4" stroke="#bd76d6" fill="none" opacity="0.595" transform="rotate(24.099999999999994, 344, 512)"></polygon><polygon points="605.65,173.85000610351562 439.5,506.15000610351564 771.8000000000001,506.15000610351564" strokeWidth="8.600000000000001" stroke="#b978d8" fill="none" opacity="0.6174999999999999" transform="rotate(20.64999999999999, 344, 512)"></polygon><polygon points="597.2,154.8000030517578 432,485.2000030517578 762.4,485.2000030517578" strokeWidth="8.8" stroke="#b57adb" fill="none" opacity="0.64" transform="rotate(17.19999999999999, 344, 512)"></polygon><polygon points="588.75,135.75 424.5,464.25 753,464.25" strokeWidth="9" stroke="#b27cdd" fill="none" opacity="0.6625" transform="rotate(13.75, 344, 512)"></polygon><polygon points="580.3,116.69999694824219 417,443.2999969482422 743.6,443.2999969482422" strokeWidth="9.2" stroke="#ae7ee0" fill="none" opacity="0.6849999999999999" transform="rotate(10.299999999999997, 344, 512)"></polygon><polygon points="571.85,97.64999389648438 409.5,422.34999389648436 734.1999999999999,422.34999389648436" strokeWidth="9.4" stroke="#aa80e2" fill="none" opacity="0.7074999999999999" transform="rotate(6.849999999999994, 344, 512)"></polygon><polygon points="563.4,78.60000610351562 402,401.40000610351564 724.8,401.40000610351564" strokeWidth="9.600000000000001" stroke="#a682e4" fill="none" opacity="0.73" transform="rotate(3.3999999999999915, 344, 512)"></polygon><polygon points="554.95,59.55000305175781 394.5,380.4500030517578 715.4,380.4500030517578" strokeWidth="9.8" stroke="#a284e7" fill="none" opacity="0.7525" transform="rotate(-0.05000000000001137, 344, 512)"></polygon><polygon points="546.5,40.5 387,359.5 706,359.5" strokeWidth="10" stroke="#9e86e9" fill="none" opacity="0.7749999999999999" transform="rotate(-3.5, 344, 512)"></polygon><polygon points="538.05,21.449996948242188 379.5,338.5499969482422 696.6,338.5499969482422" strokeWidth="10.2" stroke="#9988eb" fill="none" opacity="0.7975" transform="rotate(-6.950000000000003, 344, 512)"></polygon><polygon points="529.6,2.399993896484375 372,317.59999389648436 687.1999999999999,317.59999389648436" strokeWidth="10.4" stroke="#9589ee" fill="none" opacity="0.82" transform="rotate(-10.400000000000006, 344, 512)"></polygon><polygon points="521.15,-16.649993896484375 364.5,296.65000610351564 677.8,296.65000610351564" strokeWidth="10.600000000000001" stroke="#908bf0" fill="none" opacity="0.8424999999999999" transform="rotate(-13.850000000000009, 344, 512)"></polygon><polygon points="512.7,-35.69999694824219 357,275.7000030517578 668.4,275.7000030517578" strokeWidth="10.8" stroke="#8c8df2" fill="none" opacity="0.865" transform="rotate(-17.30000000000001, 344, 512)"></polygon><polygon points="504.25,-54.75 349.5,254.75 659,254.75" strokeWidth="11" stroke="#878ff4" fill="none" opacity="0.8875" transform="rotate(-20.75, 344, 512)"></polygon><polygon points="495.8,-73.80000305175781 342,233.7999969482422 649.6000000000001,233.7999969482422" strokeWidth="11.2" stroke="#8290f6" fill="none" opacity="0.9099999999999999" transform="rotate(-24.200000000000003, 344, 512)"></polygon><polygon points="487.35,-92.85000610351562 334.5,212.84999389648436 640.1999999999999,212.84999389648436" strokeWidth="11.4" stroke="#7c92f9" fill="none" opacity="0.9325" transform="rotate(-27.650000000000006, 344, 512)"></polygon><polygon points="478.90000000000003,-111.89999389648438 327,191.90000610351564 630.8,191.90000610351564" strokeWidth="11.600000000000001" stroke="#7794fb" fill="none" opacity="0.955" transform="rotate(-31.099999999999994, 344, 512)"></polygon><polygon points="470.45,-130.9499969482422 319.5,170.9500030517578 621.4,170.9500030517578" strokeWidth="11.8" stroke="#7195fd" fill="none" opacity="0.9774999999999999" transform="rotate(-34.55000000000001, 344, 512)"></polygon><polygon points="462,-150 312,150 612,150" strokeWidth="12" stroke="#6b97ff" fill="none" opacity="0.9999999999999999" transform="rotate(-38, 344, 512)"></polygon>
                    </g>
                </svg>


            </div>

            <div className='bg-white w-[90%] h-[80%] sm:w-[70%] sm:h-[70%] p-10 flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute'>
                <ArrowLeftIcon
                    className='w-10 h-10 m-2 rounded-full p-2 left-0 absolute bottom-0 translate-y-0 sm:top-1/2 sm:-translate-y-1/2'
                    stroke='black'
                    style={{ backgroundColor: slides[currentSlide].primaryColor, }}
                    onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
                />
                <a className='text-4xl text-center p-5 z-10 font-bold'>{slides[currentSlide].section}</a>

                <div className='z-10 grow overflow-auto'>
                    {slides[currentSlide].description.map((desc, index) => {
                        return (
                            <p key={index} className=''>{desc}</p>
                        )
                    })
                    }
                </div>

                {
                    slides[currentSlide].certificateImage &&
                    <div className='w-full h-24  bottom-0 flex items-center justify-center'>
                        {
                            slides[currentSlide].certificateImage.map((image, index) => {
                                return (
                                    <div key={index} className='w-24 h-24 relative mx-2'>

                                        <Image
                                            alt='bs'
                                            src={image}
                                            fill='responsive'
                                        />
                                    </div>
                                )
                            })

                        }

                    </div>
                }

                <ArrowRightIcon
                    onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
                    stroke='black'
                    style={{ backgroundColor: slides[currentSlide].primaryColor, }}
                    className='bg-red-300 w-10 h-10 m-2 rounded-full p-2 absolute bottom-0 translate-y-0 sm:top-1/2 sm:-translate-y-1/2 right-0' />
            </div>


        </section>
    )
}

export default Contact



