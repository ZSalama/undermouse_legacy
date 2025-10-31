import React, { useRef } from 'react'
import { Computer, Search, WandSparkles } from 'lucide-react'
import { useScroll, MotionValue, useTransform, motion } from 'framer-motion'

interface SlideProps {
    direction: 'left' | 'right'
    progress: MotionValue<number>
    src: string
    left: string
    text: string
}

export default function ScrollingText() {
    const text_container = useRef<HTMLDivElement | null>(null)
    const text_parallax = useScroll({
        target: text_container,
        offset: ['start end', 'end start'],
    })
    return (
        <div className='overflow-hidden bg-gray-200 mt-20'>
            <div ref={text_container}>
                <Slide
                    src='computer'
                    direction={'left'}
                    left={'-40%'}
                    progress={text_parallax.scrollYProgress}
                    text={'Web Developer'}
                />
                <Slide
                    src='search'
                    direction={'right'}
                    left={'-40%'}
                    progress={text_parallax.scrollYProgress}
                    text={'Full-Stack Applications'}
                />
                <Slide
                    src='wand'
                    direction={'left'}
                    left={'-40%'}
                    progress={text_parallax.scrollYProgress}
                    text={'Custom Backend'}
                />
            </div>
            <div className='h-[10vh]' />
        </div>
    )
}

const Phrase = ({ src, text }: { src: string; text: string }) => {
    return (
        <div className={'px-2 flex gap-2 items-center'}>
            <p className='text-3xl md:text-3xl lg:text-5xl xl:text-7xl'>
                {text}
            </p>
            <span className='flex h-10 md:h-18 lg:h-24 aspect-[4/2] rounded-full justify-center items-center'>
                {/* <Image
                    style={{ objectFit: 'cover' }}
                    src={src}
                    alt='image'
                    fill
                /> */}
                {src === 'computer' ? (
                    <Computer
                        className='w-8 md:w-18 lg:w-24 h-12 md:h-18 lg:h-24'
                        color='var(--paralax)'
                    />
                ) : src === 'wand' ? (
                    <WandSparkles
                        className='w-8 md:w-18 lg:w-24 h-12 md:h-18 lg:h-24'
                        color='var(--paralax)'
                    />
                ) : (
                    <Search
                        className='w-8 md:w-18 lg:w-24 h-12 md:h-18 lg:h-24'
                        color='var(--paralax)'
                    />
                )}
            </span>
        </div>
    )
}

const Slide = (props: SlideProps) => {
    const direction = props.direction == 'left' ? -1 : 1
    const translateX = useTransform(
        props.progress,
        [0, 1],
        [250 * direction, -250 * direction]
    )
    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className='relative flex whitespace-nowrap'
        >
            <Phrase src={props.src} text={String(props.text)} />
            <Phrase src={props.src} text={String(props.text)} />
            <Phrase src={props.src} text={String(props.text)} />
            <Phrase src={props.src} text={String(props.text)} />
            <Phrase src={props.src} text={String(props.text)} />
            <Phrase src={props.src} text={String(props.text)} />
        </motion.div>
    )
}
