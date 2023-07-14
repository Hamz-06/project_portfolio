"use client"

import React from 'react'
import { cn } from '@/util/util'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import myPicture from './face.png'


function Project() {

    const router = useRouter()
    const techStack = ['react', 'figma', 'html']
    const imagess = ['img1', 'img2', 'img3', 'img4']
    return (
        <main>
            <section className='w-screen min-h-screen h-auto bg-red-500'>
                {/* back  */}
                <div className='m-auto inline-block relative items-center group/item p-5 '>

                    <div className='w-10 h-10 bg-slate-700 rounded-full p-2 '>
                        <ArrowLeftIcon className='group-hover/item:stroke-zinc-50 transition-all duration-500 ease-linear' onClick={() => router.push('/')} />
                    </div>

                    <a className='w-20 absolute  translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-500 ease-linear hover:text-gray-600'>Go Back</a>
                </div>



                <div className='flex flex-col md:flex-row '>
                    {/* project title  */}
                    <div className='basis-1/2 relative'>
                        <a className='text-4xl font-bold'>project </a>
                        <br />
                        <span>
                            <a href='/' className='hover:text-gray-600'> Home </a> {'>'} {'s'}
                        </span>
                        {/* image that is removed on mobile */}
                        <div className='mt-10 ml-auto mr-auto relative box-border w-[30%] p-[30%]  bg-red-300'>

                            <Image
                                src={myPicture}
                                fill='responsive'

                            />
                        </div>
                    </div>

                    {/* tools and tech */}
                    <div className='basis-1/2 h-auto'>

                        <div className='bg-pink-600 h-44 mt-10'>
                            <a>Project Description</a>

                        </div>
                        <div className=' bg-red-400 h-44'>
                            Tools Used
                        </div>

                        <ul className='bg-gray-400 h-44 mb-10'>
                            <a>Tech Stack</a>
                            {techStack.map((tech, i) => {
                                return (
                                    <li key={i} className='px-2 py-1 bg-teal-400/90 text-teal-300 inline-block bg-opacity-60  rounded-xl text-md'>
                                        {tech}
                                    </li>
                                )
                            })
                            }
                        </ul>

                    </div>
                </div>
            </section>

            {/* section two images */}
            <section className='w-screen min-h-screen h-auto flex flex-col  md:flex-row'>
                {/* other images */}
                <div className='w-full md:w-[60%] min-h-[100vh] grid grid-rows-4 sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 '>

                    {imagess.map((img, i) => {
                        return (
                            <div className='w-48 h-48 sm:w-52 sm:h-52  lg:w-60 relative lg:h-60 xl:w-72 xl:h-72 m-auto p-2 bg-green-300 '>


                                <Image
                                    src={myPicture}
                                    fill='responsive'

                                />

                            </div>
                        )
                    })}

                </div>
                {/* extra description */}
                <div className='w-full md:w-[40%]  md:h-[inherit]  bg-red-500'>
                    <a>Key features</a>
                </div>
            </section>
        </main>
    )
}

export default Project



