import React from 'react'
import { Reorder } from 'framer-motion'
import { useMotionValue, motion } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'
import { useState } from 'react'
import { Grip, ArrowBigRight } from 'lucide-react'
import CTA from '../CTA'

interface Props {
    value: [string, string]
}

// const words: [string, string][] = [
//     ['Branding', '#branding'],
//     ['Analytics', '#analytics'],
//     ['Design', '#design'],
//     ['SEO', '#SEO_anchor'],
//     ['Mobile', '#mobile'],
//     ['UX/UI', '#UX'],
//     ['And More', '#andMore'],
// ]

const words: [string, string][] = [
    ['Analytics', '#analytics'],
    ['About', '#about'],
    ['Portoflio', '#portfolio'],
]

export default function Services() {
    const [items, setItems] = useState(words)

    return (
        <div className='h-screen bg-gray-200 p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:h-full md:h-full px-0 md:px-[5%] lg:px-[10%]'>
                {/* Full-width title at the top */}
                <h1 className='col-span-full text-center text-[4.5vw] max-w-4xl mx-auto font-bold'>
                    Services
                </h1>

                <div className='text-lg md:text-4xl lg:text-4xl flex justify-center items-center text-left flex-col gap-4 my-auto'>
                    We can help you:{' '}
                    <CTA className='text-lg md:text-4xl lg:text-[4.5vw]  ' />
                </div>
                <Reorder.Group
                    axis='y'
                    onReorder={setItems}
                    values={items}
                    className='flex flex-col gap-4 items-center'
                >
                    {items.map((item) => (
                        <Item key={item[0]} value={item} />
                    ))}
                </Reorder.Group>
            </div>
        </div>
    )
}

const Item = ({ value }: Props) => {
    const y = useMotionValue(0)
    const boxShadow = useRaisedShadow(y)

    const [text, href] = value

    return (
        <Reorder.Item
            value={value}
            id={text}
            style={{ boxShadow, y, cursor: 'grab' }}
            className='relative flex items-center justify-center bg-[var(--sidebar)] rounded-lg p-4 shadow-md mb-4 text-center w-[15rem] md:max-w-md lg:w-[20rem]'
        >
            <span className='absolute left-4'>
                <Grip className='w-5 h-5' />
            </span>
            <span className='pointer-events-none'>{text}</span>
            <motion.a className='absolute right-4' href={href}>
                <ArrowBigRight className='w-5 h-5' />
            </motion.a>
        </Reorder.Item>
    )
}
