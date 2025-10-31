import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText'

import React, { useRef } from 'react'

gsap.registerPlugin(SplitText)

export default function CTA_2() {
    const textRef = useRef(null)

    useGSAP(() => {
        const splitText = new SplitText(textRef.current, {
            type: 'words, chars',
        })

        gsap.from(splitText.chars, {
            opacity: 0,
            y: -80,
            stagger: 0.1,
            duration: 1,
        })
        return () => {
            splitText.revert()
        }
    }, [])
    return (
        <h1 className='text-[4.5vh] font-bold' ref={textRef}>
            UnderMouse <br /> Web Services
        </h1>
    )
}
