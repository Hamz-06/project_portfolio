import { useRouter } from 'next/navigation'
import React from 'react'

function Project({ data, index }) {

    const router = useRouter()
    return (
        <div onClick={() => router.push((data.githubLink))} className='h-1/5 w-full bg-orange-500 mt-2 flex'>
            {/* index hash  */}
            <div className='w-16 md:w-24 h-full bg-red-800 relative flex-none'>
                <h1 className='text-4xl font-bold absolute inline-block left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>#{index}</h1>
            </div>

            <div className='bg-white w-[calc(100%-64px)] md:w-[calc(100%-96px)] flex items-center'>
                <div className='flex-none text-base w-24 h-24 md:w-28 md:h-28 bg-pink-500 ml-1 md:ml-3'>

                </div>
                <div className='p-2'>
                    <a className='line-clamp-2'>{data.title}</a>
                    <a className='line-clamp-3 text-sm'>{data.description}</a>
                </div>

            </div>
        </div>

    )
}

export default Project