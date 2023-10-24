'use client'

import { Skeleton } from "../component/ui/skeleton";


export default function Loading() {
    // return <div className="w-screen backdrop-blur-sm h-screen fixed flex items-center justify-center z-[1000] ">
    //     <a className="text-black text-lg">Loading Data..</a>
    // </div>;
    return (
        <div className='snap-start min h-screen min-h-[600px] inline-block relative w-screen' >
            <Skeleton className='lg:h-96 lg:w-96 rounded-full absolute z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2' />

            <Skeleton className='bottom-0 w-40 h-5 absolute right-1/2 translate-x-1/2 mb-2' />
        </div>
    )
}