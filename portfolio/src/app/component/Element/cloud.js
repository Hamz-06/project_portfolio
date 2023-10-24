'use client'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';


function Cloud({ leftSide }) {


    const [StyledDiv, setStyledDiv] = useState(null)
    const [dimensions, setDimensions] = useState(null)
    var min = 100;
    var max = 150;
    var keyFrame = 0
    var yAxis = 0
    var xAxis = 0
    var widthSize = 0

    useEffect(() => {


        if (window === undefined) return
        // maybe fix this later
        var browserYaxis = window?.innerHeight;

        var browserXcenter = window?.innerWidth / 2

        var yAxisMin = Math.floor(browserYaxis * 0.6);
        var yAxisMax = Math.floor(browserYaxis * 0.9);
        yAxis = Math.floor(Math.random() * (yAxisMax - yAxisMin + 1)) + yAxisMin;

        xAxis = Math.floor(Math.random() * browserXcenter) + (leftSide > 1 ? browserXcenter : 0);
        widthSize = Math.floor(Math.random() * (max - min + 1)) + min;
        const random = Math.floor(Math.random() * 3) - 1;

        keyFrame = keyframes`
        50% { transform: translateY(${-15 * random}px);}`

        setStyledDiv(styled.div`
        animation: ${keyFrame} 10s ease infinite ;`);
        setDimensions({ width: widthSize, xAxis: xAxis, yAxis: yAxis })

    }, [])





    if (StyledDiv === null) return (<></>)

    return (

        <StyledDiv className={`inline-block cloud z-10tall:top-6 fixed`} style={{ right: dimensions.xAxis + 'px', bottom: dimensions.yAxis + 'px', }}>
            <svg viewBox="0 0 137 86" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: dimensions.width }}>
                <path d="M121.312 85.0582H28.8125C28.8125 85.0582 16.3604 83.8636 10.3125 79.0582C5.17566 74.9767 1.3125 65.5582 1.3125 65.5582C1.3125 65.5582 1.28276 65.3064 1.24163 64.8554C0.979608 61.9823 0.255332 51.0237 3.81247 45.5582C5.85953 42.4129 9.79722 38.4853 13.3125 36.5582C17.0514 34.5085 21.8125 33.0582 21.8125 33.0582C21.8125 33.0582 22.096 24.1506 24.3125 19.0582C26.215 14.6873 27.8123 12.2943 31.3125 9.05821C35.1004 5.55614 37.8987 4.12907 42.8125 2.55821C47.1265 1.17909 49.7883 0.847275 54.3125 1.05821C60.8518 1.36309 64.8528 2.4462 70.3125 6.05821C75.5059 9.49399 80.8125 18.0582 80.8125 18.0582C80.8125 18.0582 88.7984 16.1722 93.8125 17.0582C98.8889 17.9552 101.698 19.4524 105.812 22.5582C109.566 25.3914 111.852 27.2838 113.812 31.5582C115.862 36.0272 115.312 44.0582 115.312 44.0582C115.312 44.0582 119.007 43.639 121.312 44.0582C127.076 45.1061 130.211 48.0888 133.312 53.0582C136.172 57.6398 136.783 61.178 136.312 66.5582C135.974 70.434 135.352 72.7452 133.312 76.0582C130.241 81.0464 121.312 85.0582 121.312 85.0582Z" fill="white" />
                <path d="M1.3125 65.5582C1.3125 65.5582 5.17566 74.9767 10.3125 79.0582C16.3604 83.8636 28.8125 85.0582 28.8125 85.0582H121.312C121.312 85.0582 130.241 81.0464 133.312 76.0582C135.352 72.7452 135.974 70.434 136.312 66.5582C136.783 61.178 136.172 57.6398 133.312 53.0582C130.211 48.0888 127.076 45.1061 121.312 44.0582C119.007 43.639 115.312 44.0582 115.312 44.0582C115.312 44.0582 115.862 36.0272 113.812 31.5582C111.852 27.2838 109.566 25.3914 105.812 22.5582C101.698 19.4524 98.8889 17.9552 93.8125 17.0582C88.7984 16.1722 80.8125 18.0582 80.8125 18.0582C80.8125 18.0582 75.5058 9.49399 70.3125 6.05821C64.8528 2.4462 60.8518 1.36309 54.3125 1.05821C49.7883 0.847275 47.1265 1.17909 42.8125 2.55821C37.8987 4.12907 35.1004 5.55614 31.3125 9.05821C27.8123 12.2943 26.215 14.6873 24.3125 19.0582C22.096 24.1506 21.8125 33.0582 21.8125 33.0582C21.8125 33.0582 17.0514 34.5085 13.3125 36.5582C9.79722 38.4853 5.85953 42.4129 3.81247 45.5582C0.255332 51.0237 0.979608 61.9823 1.24163 64.8554M1.3125 65.5582C1.3125 65.5582 1.28276 65.3064 1.24163 64.8554M1.3125 65.5582L1.24163 64.8554" stroke="black" />
            </svg>
        </ StyledDiv>
    )

}

export default Cloud