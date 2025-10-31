// components/BackgroundVideo.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7
        }
    }, [])

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className='fixed top-0 left-0 w-full h-full object-cover'
        >
            <source src='background.mp4' type='video/mp4' />
        </video>
    )
}
