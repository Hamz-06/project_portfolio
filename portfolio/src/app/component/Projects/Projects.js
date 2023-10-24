"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/util/sanity.client'


function Project({ data }) {

    const router = useRouter()
    const builder = imageUrlBuilder(client);
    const [inlargeImage, setInlargeImage] = useState(false)
    const overlay = useRef()
    const wrapper = useRef()
    console.log(data[0]?.title_color ? data[0]?.title_color[0] : process.env.NEXT_PUBLIC_TEXT_PRIMARY)
    console.log(data[0]?.title_color ? data[0]?.title_color[1] : process.env.NEXT_PUBLIC_TEXT_SECONDARY)
    // const [title_color_primary, title_color_secondary] = data[0].title_color === null ? [process.env.NEXT_PUBLIC_TEXT_PRIMARY, process.env.NEXT_PUBLIC_TEXT_SECONDARY] : data[0].title_color

    const InLargeImageFunction = useCallback(() => {

        const onDismiss = useCallback(() => {
            console.log('dismiss')
            setInlargeImage(false)
        }, [router])

        const onClick = useCallback(
            (e) => {
                console.log('click')
                if (e.target === overlay.current) {
                    if (onDismiss) onDismiss()
                }
            },
            [onDismiss, overlay, wrapper]
        )

        const onKeyDown = useCallback(
            (e) => {
                if (e.key === 'Escape') onDismiss()
            },
            [onDismiss]
        )


        useEffect(() => {
            document.addEventListener('keydown', onKeyDown)
            return () => document.removeEventListener('keydown', onKeyDown)
        }, [onKeyDown])

        return (
            inlargeImage ? <div onClick={onClick} ref={overlay} className='fixed w-screen h-screen z-[999] flex items-center justify-center'>

                <div ref={wrapper} style={{ backgroundColor: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}` }} className={`w-[80%] h-[80%] relative flex flex-col items-center justify-center`}>

                    <div className='w-[100%] h-[95%] relative m-2'>
                        <Image
                            src={inlargeImage}
                            fill='true'
                            className='object-scale-down'
                            aspectRatio={1 / 1}


                        />
                    </div>
                    <p>Click Esc or click out of the image..</p>
                </div>

            </div> : ''
        )
    }, [inlargeImage])
    return (
        <>
            <InLargeImageFunction />

            <main className={`${inlargeImage ? 'blur-sm' : 'blur-none'}`} >
                <section className={`w-screen min-h-screen h-auto p-5`} style={{ backgroundColor: `${data[0].background_color ?? process.env.NEXT_PUBLIC_BACKGROUND_PRIMARY}` }}>
                    {/* back  */}
                    <div className='m-auto inline-block relative items-center group/item p-5'>

                        <div className='w-10 h-10 bg-slate-700 rounded-full p-2 '>
                            <ArrowLeftIcon className='group-hover/item:stroke-zinc-50 transition-all duration-500 ease-linear' onClick={() => router.push('/#my-projects')} />
                        </div>

                        <a className='w-20 absolute  translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-500 ease-linear hover:text-gray-600'>Go Back</a>
                    </div>



                    <div className='flex flex-col md:flex-row h-auto min-h-[calc(100vh-150px)]'>
                        {/* project title  */}
                        <div className='basis-1/2 relative flex flex-col items-center justify-center grow'>
                            {/* <span className='absolute top-0 left-0 line-clamp-1'>
                            <a href='/' className='hover:text-gray-600'> Home </a> {'>'} {data[0]?.title}
                        </span> */}
                            <a style={{
                                background: `-webkit-linear-gradient(left,${data[0]?.title_color ? data[0].title_color[0] : process.env.NEXT_PUBLIC_TEXT_PRIMARY}, ${data[0]?.title_color ? data[0]?.title_color[1] : process.env.NEXT_PUBLIC_TEXT_SECONDARY})`,
                                WebkitTextFillColor: 'transparent',
                                WebkitBackgroundClip: 'text'
                            }}
                                className='text-3xl sm:text-3xl md:text-5xl font-bold block text-center bg-gradient-to-r
                            bg-clip-text text-transparent px-2'>
                                {data[0]?.title}
                            </a>
                            {data[0].url_link ? <a href={data[0].url_link}
                                target='_blank'
                                className='mt-2 rounded-full p-2 hover:scale-110'
                                style={{ backgroundColor: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}` }}>
                                Click me
                            </a> : ''}

                        </div>

                        {/* tools and tech */}
                        <div className='basis-1/2 flex-grow h-auto mt-15'>

                            <div className=' h-44 mt-6 text-center sm:text-left flex flex-col'>
                                <h1 className='text-lg font-bold underline underline-offset-2'
                                    style={{
                                        textDecoration: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}`,
                                        textDecorationLine: 'underline',
                                        textUnderlineOffset: '0.2em'
                                    }} >
                                    Project Description
                                </h1>
                                <p className='mt-2 overflow-auto'>{data[0]?.description}</p>

                            </div>

                            <ul className=' h-44  mt-3 text-center sm:text-left overflow-auto'>
                                <a className='text-lg font-bold underline underline-offset-2 '
                                    style={{
                                        textDecoration: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}`,
                                        textDecorationLine: 'underline',
                                        textUnderlineOffset: '0.2em'
                                    }}>
                                    Tools & Frameworks
                                </a> <br />
                                {data[0]?.tools_used?.map((tech, i) => {
                                    return (
                                        <li key={i}
                                            className='inline-block m-2 bg-orange-500 p-1 px-2 rounded-full '
                                            style={{ backgroundColor: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}` }}>
                                            {tech}
                                        </li>
                                    )
                                })
                                }
                            </ul>
                            <a
                                className=' absolute top-0 right-0 mt-2 mr-2'

                            >{data[0]?.year_created}
                            </a>
                        </div>
                    </div>
                    {/* see below  */}
                    <div className='text-center'>
                        Scroll down to see more...

                    </div>
                </section>

                {/* section two images */}
                <section className='w-screen min-h-screen h-auto flex flex-col bg-slate-300 md:flex-row'
                    style={{ backgroundColor: `${data[0].background_color ?? process.env.NEXT_PUBLIC_BACKGROUND_PRIMARY}` }}>
                    {/* other images */}
                    {/* <div className='w-full md:w-[60%] min-h-[100vh] grid grid-rows-4 sm:grid-rows-2 grid-cols-1 sm:grid-cols-2 '> */}
                    <div className='w-full md:w-[60%]   min-h-[100vh] px-2'>

                        {data[0].all_images?.map((img, i) => {
                            const imageUrl = builder.image(img.asset).url()
                            return (

                                // <div className='w-48 h-48 sm:w-52 sm:h-52  lg:w-64 relative lg:h-64 xl:w-72 xl:h-72 m-auto  bg-green-300 '>
                                <div
                                    key={i}
                                    style={{ backgroundColor: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}` }}
                                    className={`shadow-2xl relative aspect-square w-[85%] sm:w-[47%] m-2 inline-block outline-4 hover:cursor-pointer`} onClick={() => setInlargeImage(imageUrl)}>

                                    < Image
                                        src={imageUrl}
                                        fill='true'
                                        className='object-cover p-1'
                                        aspectRatio={1 / 1}

                                    />
                                </div>
                            )
                        })}

                    </div>
                    {/* extra description */}
                    <div className='w-full md:w-[40%] md:h-[inherit]  p-4'>
                        <span
                            className='text-lg font-bold mx-auto mb-2 block w-full text-center sm:text-left '
                            style={{
                                textDecoration: `${data[0].secondary_color ?? process.env.NEXT_PUBLIC_SECONDARY}`,
                                textDecorationLine: 'underline',
                                textUnderlineOffset: '0.2em'
                            }}
                        >
                            Acquired skills and knowledge

                        </span>

                        {data[0].features?.map((feature, i) => {
                            return (
                                <li key={i} className='mt-4'>
                                    {feature}
                                </li>
                            )
                        })}
                    </div>
                </section>
            </main >
        </>
    )
}

export default Project



