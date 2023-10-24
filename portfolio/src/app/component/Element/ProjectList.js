'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/util/sanity.client';
function ProjectList({ data, index }) {

    const builder = imageUrlBuilder(client);
    const router = useRouter()
    const imageUrl = data?.main_image ? builder.image(data.main_image).url() : null;


    return (
        <div onClick={() => router.push(`project/${data?.slug.current}`)}
            className='h-auto w-full group/itemlist mt-2 flex cursor-pointer'>
            {/* index hash  */}
            <div className='w-16 md:w-24 h-full relative flex-none flex items-center justify-center my-auto sm:justify-end'>
                <h1 className='text-4xl font-bold '>#{index}</h1>
            </div>

            <div className=' w-[calc(100%-64px)] md:w-[calc(100%-96px)] flex items-center'>
                <div className='flex-none text-base w-24 h-24 md:w-32 md:h-32 bg-purple-500 ml-1 md:ml-3 relative'>
                    {imageUrl ? < Image
                        alt='main image'
                        src={imageUrl}
                        className='object-cover'
                        fill='true'
                    /> : ''}
                </div>
                <div className='p-2 group-hover/itemlist:bg-lime-200'>
                    <a className='line-clamp-2 text-lg font-bold'>{data?.title}</a>
                    <a className='line-clamp-3 text-sm'>{data.description}</a>
                    <a className='text-sm mt-1'>{data?.year_created}</a>
                </div>

            </div>
        </div>

    )
}

export default ProjectList