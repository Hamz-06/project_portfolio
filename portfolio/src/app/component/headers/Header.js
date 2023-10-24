'use client'
import React, { useEffect, useRef, useState } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

import { PAGES, TIMER } from '@/data/Data'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../../redux/currentpage_slice'

function Header() {

    const router = useRouter()
    useEffect(() => {
        var myHash = window.location.hash
        myHash = myHash.split('#')[1]
        const hashElement = document.getElementById(myHash)

        hashElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])


    return (
        <header className='fixed w-52 h-10 sm:h-52 sm:w-10 flex flex-row sm:flex-col sm:right-0 
        sm:bottom-1/2 sm:translate-y-1/4 sm:mr-10 z-50 rounded-full bg-white right-1/2 translate-x-1/2
        mt-5 '>

            {/* header side */}
            {
                PAGES.map((page, index) => {
                    const pageHash = page.pagesHash
                    return (
                        <a href={`#${pageHash}`} key={index} className={`flex-1 flex items-center justify-center `}>
                            <div className='w-3 h-3 bg-black rounded-full '>

                            </div>
                        </a>
                    )
                })
            }

        </header>
    )
}

export default Header