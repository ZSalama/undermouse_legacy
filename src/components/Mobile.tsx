interface Props {
    className: string
}

export default function Mobile({ className }: Props) {
    return (
        <div className={`${className} text-center font-bold`} id='mobile'>
            <h2 className='text-[4.5vw]'>Mobile</h2>
            <p className='font-normal text-left text-xl md:text-4xl lg:text-4xl pt-4'>
                Branding is the process of creating a unique name and image for
                a product in the consumer&apos;s mind, through the use of
                marketing strategies. It is a way to differentiate a product
                from its competitors and create a lasting impression in the
                minds of consumers. Branding involves creating a name, logo,
                design, and messaging that resonates with the target audience
                and reflects the values and personality of the brand.
            </p>
        </div>
    )
}
