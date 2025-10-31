// components/MotionButton.tsx
import React from 'react'
import { motion, MotionProps } from 'framer-motion'
// import Link from 'next/link'
// import styles from './CTA_Button.module.css'

export interface MotionButtonProps extends MotionProps {
    /** Button label or any React node */
    children: React.ReactNode
    /** Tailwind or plain CSS classes */
    className?: string
    /** Click handler */
    // onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const MotionButton: React.FC<MotionButtonProps> = ({
    children,
    className = '',
    // onClick,
    // sensible defaults you can override via props:
    initial = { opacity: 0, y: 10 },
    animate = { opacity: 1, y: 0, transition: { duration: 5 } },
    whileHover = { scale: 1.05 },
    whileTap = { scale: 0.95 },
    ...rest
}) => {
    return (
        <motion.a
            href='#contact'
            className='bg-[var(--sidebar)] px-8 py-3 rounded-lg w-fit shadow-[0_2px_8px_rgba(0,0,0,0.1)]'
            initial={initial}
            animate={animate}
            whileHover={whileHover}
            whileTap={whileTap}
            {...rest}
        >
            <button
                // onClick={onClick}
                //   className={`inline-block px-4 py-2 rounded-md ${className}`}
                className={` ${className} `}
                // {...rest}
            >
                {children}
            </button>
        </motion.a>
    )
}

export default MotionButton
