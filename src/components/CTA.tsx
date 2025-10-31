'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

// const words = [
//     'Websites',
//     'Strategy',
//     'Domains',
//     'Hosting',
//     'Marketing',
//     'Design',
//     'SEO',
// ]

const words = ['Succeed', 'Grow', 'Profit', 'Scale', 'Design', 'Thrive']

gsap.registerPlugin(SplitText)

export default function CTA({ className }: { className?: string }) {
    const textRef = useRef<HTMLSpanElement>(null)
    const revealRef = useRef(null)

    useEffect(() => {
        if (!textRef.current) return

        let idx = 0
        let cancelled = false

        const runCycle = () => {
            if (cancelled) return
            const el = textRef.current!
            // 1) wrap each char
            const split = new SplitText(el, { type: 'chars' })
            const chars = split.chars

            // 2) build the timeline
            gsap.timeline({
                onComplete: () => {
                    // clean up the wrappers
                    split.revert()

                    // advance our index & swap the text
                    idx = (idx + 1) % words.length
                    el.textContent = words[idx]

                    // recurse to the next cycle
                    runCycle()
                },
            })
                // animate in
                .from(chars, {
                    opacity: 0,
                    x: 50,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: 'power2.out',
                })
                // hold on screen
                .to({}, { duration: 2 })
                // animate out
                .to(chars, {
                    opacity: 0,
                    x: -50,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: 'power2.in',
                })
        }

        runCycle()

        return () => {
            cancelled = true
            gsap.killTweensOf('*')
        }
    }, [])

    return (
        <div className={`${className}`}>
            <p ref={revealRef}>
                {/* Let&apos;s Talk */}
                {/* <br /> */}
                <span ref={textRef}>{words[0]}</span>
            </p>
        </div>
    )
}
