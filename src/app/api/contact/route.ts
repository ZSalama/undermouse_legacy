'use server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    // 1) Grab the form data
    const { name, email, message, favoriteColor } = await request.json()

    // 2) Check your Resend access key
    const accessKey = process.env.EMAIL_ACCESS_TOKEN
    if (!accessKey) {
        return NextResponse.json(
            { error: 'Missing EMAIL_ACCESS_TOKEN environment variable' },
            { status: 500 }
        )
    }

    // 3) Honeypot spam check (hidden field "favoriteColor")
    if (favoriteColor) {
        return NextResponse.json({ success: true })
    }

    const fromAddress = process.env.EMAIL_FROM || 'onboarding@resend.dev'
    const toAddress =
        process.env.EMAIL_TO || 'undermouseweb@gmail.com'

    // 5) Send to Resend
    let web3Res: Response
    try {
        web3Res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromAddress,
                to: [toAddress],
                subject: `New contact form message from ${name}`,
                reply_to: email,
                text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            }),
        })
    } catch (err) {
        console.error('Fetch error:', err)
        return NextResponse.json(
            { error: 'Network error when submitting to Resend' },
            { status: 502 }
        )
    }

    const contentType = web3Res.headers.get('content-type') || ''
    const rawBody = await web3Res.text()
    let json: any = null
    if (contentType.includes('application/json')) {
        try {
            json = JSON.parse(rawBody)
        } catch (err) {
            console.error('Web3Forms JSON parse error:', err)
        }
    }

    if (!web3Res.ok || !json?.id) {
        console.error('Resend error:', {
            status: web3Res.status,
            contentType,
            body: rawBody,
        })
        return NextResponse.json(
            {
                error:
                    json?.message ||
                    `Resend request failed (status ${web3Res.status})`,
            },
            { status: 502 }
        )
    }

    return NextResponse.json({ success: true })
}
