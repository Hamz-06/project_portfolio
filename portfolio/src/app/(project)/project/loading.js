'use client'

import { Skeleton } from "@/app/component/ui/skeleton"

export default function Loading() {
    // return <div className="w-screen backdrop-blur-sm h-screen fixed flex items-center justify-center z-[1000] ">
    //     <a className="text-black text-lg">Loading Data..</a>
    // </div>;
    return (
        <div className='w-screen h-screen p-5' >


            <Skeleton className='w-10 h-10 absolute' />

            <div className='flex flex-col md:flex-row h-auto min-h-[calc(100vh-80px)]'>
                <div className='basis-1/2 relative flex flex-col items-center justify-center grow'>
                    <Skeleton className='w-[70%] h-10' />
                    <Skeleton className='w-[80%] h-10 mt-5' />
                    <Skeleton className='w-[75%] h-10 mt-5' />
                    <Skeleton className='w-[50%] h-10 mt-5 hidden sm:inline' />

                </div>

                <div className='basis-1/2 flex-grow h-auto mt-15'>
                    <Skeleton className='top-0 absolute right-0 w-40 m-5 h-10 hidden sm:inline' />

                    <div className='h-44 mt-10 text-center flex flex-col '>
                        <Skeleton className='h-8 w-32' />

                        <Skeleton className='w-[90%] h-4 mt-10' />
                        <Skeleton className='w-[90%] h-4 mt-2' />
                        <Skeleton className='w-[90%] h-4 mt-2' />
                        <Skeleton className='w-[90%] h-4 mt-2' />
                        <Skeleton className='w-[90%] h-4 mt-2 hidden sm:inline' />
                        <Skeleton className='w-[90%] h-4 mt-2 hidden sm:inline' />

                    </div>
                    <div className='h-44 sm:mt-32 mt-12 text-center flex flex-col '>
                        <Skeleton className='h-8 w-32' />

                        <Skeleton className='w-[90%] h-4 mt-10' />
                        <Skeleton className='w-[90%] h-4 mt-2' />
                        <Skeleton className='w-[90%] h-4 mt-2' />
                        <Skeleton className='w-[90%] h-4 mt-2' />

                    </div>

                </div>
            </div>


            <div className='flex items-center mb-10 justify-center'>

                <Skeleton className='w-52 h-6' />

            </div>
        </div >
    )
}