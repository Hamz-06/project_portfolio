'use client'
export default function Loading() {
    return <div className="bg-white w-screen backdrop-blur-sm h-screen fixed flex items-center justify-center z-[1000] ">
        <a className="text-red-500 text-lg">Loading Data..</a>
    </div>;
}