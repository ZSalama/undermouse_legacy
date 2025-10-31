'use client'
import React, { useRef, useEffect } from 'react'

export default function ParallaxImage({ src, alt, height = 500, speed = 0.5 }) {
    const imgRef = useRef(null)

    useEffect(() => {
        const imgEl = imgRef.current
        if (!imgEl) return

        let frameId = null
        const handleScroll = () => {
            const rect = imgEl.parentElement.getBoundingClientRect()
            // how far the container has scrolled into view
            const offset = window.innerHeight - rect.top
            // only animate while container is visible
            if (offset > 0 && rect.top < window.innerHeight) {
                imgEl.style.transform = `translateY(${-(offset * speed)}px)`
            }
        }

        const onScroll = () => {
            // throttle with rAF
            if (frameId === null) {
                frameId = window.requestAnimationFrame(() => {
                    handleScroll()
                    frameId = null
                })
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        // initial position
        handleScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
            frameId && window.cancelAnimationFrame(frameId)
        }
    }, [speed])

    const extra = height * speed * 2

    return (
        <div
            style={{
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                height: `${height}px`,
                marginBottom: `-${extra}px`, // ← slide next section up
                marginTop: `5rem`,
                justifyContent: 'center',
                alignItems: 'center',
                // display: 'flex',
                // backgroundColor: 'black',
                margin: 'auto',
            }}
        >
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '20%',
                    height: `${height + extra}px`, // same as height*(1+speed)
                    objectFit: 'cover',
                    willChange: 'transform',
                }}
            />
        </div>
    )
}
