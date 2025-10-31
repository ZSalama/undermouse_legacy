import Link from 'next/link'
import React from 'react'

type Props = {
    className?: string
}

export default function Footer({ className }: Props) {
    return (
        <div
            className={`p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto text-center w-xl md:w-2xl lg:w-4xl overflow-x-hidden ${className}`}
        >
            <div className='flex flex-col md:flex-col gap-4 items-center text-lg'>
                <p>UnderMouse LLC &copy; 2025 All Rights Reserved</p>
                <Link
                    href='https://github.com/ZSalama/undermouse'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    https://github.com/ZSalama/undermouse
                </Link>
            </div>
        </div>
    )
}
