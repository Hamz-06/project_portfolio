'use client'
import React, { useEffect, useRef, useState } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

import { PAGES, TIMER } from '@/data/Data'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../redux/currentpage_slice'

function Header() {

    const pageLength = PAGES.length
    const router = useRouter()
    const [isPause, setPause] = useState(true)
    // const [currentPage, setPage] = useState()
    var currentPagePointerRef = useRef()



    // useEffect(() => {

    //     // const scroll = document.addEventListener("scroll", () => {
    //     //     console.log(window.pageYOffset)
    //     // });
    //     const hash = window.location.hash === '' ? null : window.location.hash
    //     //if no hash then set page 
    //     if (!hash) {
    //         const firstPage = PAGES[0].pagesHash
    //         // setPage(PAGES[0])
    //         dispatch(setCurrentPage(PAGES[0]))
    //         currentPagePointerRef.current = 0
    //         // router.push(`#${firstPage}`)
    //     } else {
    //         //if hash then set page pointer
    //         const findIndex = PAGES.findIndex((page) => {
    //             const splicedHash = hash.split('#')[1]
    //             return page.pagesHash === splicedHash
    //         })
    //         currentPagePointerRef.current = findIndex
    //         dispatch(setCurrentPage(PAGES[findIndex]))
    //     }


    // }, [])

    // useEffect(() => {
    //     console.log(currentPagePointerRef.current)
    //     //push new hash to url 
    //     router.push(`#${PAGES[currentPagePointerRef.current !== -1 ? currentPagePointerRef.current : 0].pagesHash}`)
    //     //incase of error set page to 0
    //     const currentPagePointer = currentPagePointerRef.current
    //     if (currentPagePointer === -1) {
    //         // setPage(PAGES[currentPagePointerRef.current])
    //         currentPagePointerRef.current = 0
    //         dispatch(setCurrentPage(PAGES[currentPagePointerRef.current]))
    //     }


    //     //change color of nav 
    //     for (var i = 0; i < PAGES.length; i++) {
    //         if (currentPagePointer < i) {
    //             document.getElementById(`nav${i}`).style.backgroundColor = 'pink'
    //             document.getElementById(`nav${i}`).style.width = '100%'
    //             continue
    //         }
    //         document.getElementById(`nav${i}`).style.width = '0%'
    //         document.getElementById(`nav${i}`).style.backgroundColor = 'red'

    //     }

    // }, [currentPage])

    // useEffect(() => {
    //     const clickListner = document.body.addEventListener('click', e => clickedEvent(e));

    //     const clickedEvent = (e) => {

    //         const midPoint = window.innerWidth / 2
    //         if (e.clientX > midPoint) {

    //             updatePage('right')

    //         } else {

    //             updatePage('left')
    //         }
    //     }

    //     const updatePage = (controller) => {
    //         switch (controller) {
    //             case "right":
    //                 const pageLength = PAGES.length
    //                 const currPage = currentPagePointerRef.current + 1
    //                 if (currPage < pageLength) {
    //                     currentPagePointerRef.current = currentPagePointerRef.current + 1
    //                     // setPage(PAGES[currentPagePointerRef.current])
    //                     dispatch(setCurrentPage(PAGES[currentPagePointerRef.current]))
    //                 }
    //                 break;
    //             case "left":
    //                 const currPageLow = currentPagePointerRef.current - 1
    //                 if (currPageLow >= 0) {
    //                     currentPagePointerRef.current = currentPagePointerRef.current - 1
    //                     // setPage(PAGES[currentPagePointerRef.current])
    //                     dispatch(setCurrentPage(PAGES[currentPagePointerRef.current]))

    //                     break;
    //                 }
    //                 // code block
    //                 break;
    //         }
    //     }
    //     return () => removeEventListener(clickListner, clickedEvent)
    // }, [])

    useEffect(() => {
        var myHash = window.location.hash
        myHash = myHash.split('#')[1]
        const hashElement = document.getElementById(myHash)

        hashElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         const entry = entries
    //         console.log(entry[0].intersectionRect)
    //     })
    //     const contact = document.getElementById('contact')
    //     observer.observe(contact)
    // }, [])

    return (
        <header className='fixed w-52 h-10 sm:h-52 sm:w-10 flex flex-row sm:flex-col sm:right-0 
        sm:bottom-1/2 sm:translate-y-1/4 sm:mr-10 z-50 rounded-full bg-white right-1/2 translate-x-1/2
        mt-5'>
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