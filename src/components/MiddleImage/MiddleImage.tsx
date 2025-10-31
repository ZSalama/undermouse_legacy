import Image from 'next/image'
import styles from '@/app/(hero)/page.module.css'

export default function MiddleImage() {
    return (
        <Image
            src='/beach.jpg'
            alt='Beach'
            width={10000}
            height={10000}
            className={styles.middle_image_container}
        />
    )
}
