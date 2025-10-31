'use server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    // 1) Grab the form data
    const { name, email, message, favoriteColor } = await request.json()

    // 2) Check your Web3Forms access key
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

    const payload = new FormData()
    payload.append('access_key', accessKey)
    payload.append('name', name)
    payload.append('email', email)
    payload.append('message', message)

    // 5) Send to Web3Forms
    let web3Res: Response
    try {
        web3Res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: payload,
        })
    } catch (err) {
        console.error('Fetch error:', err)
        return NextResponse.json(
            { error: 'Network error when submitting to Web3Forms' },
            { status: 502 }
        )
    }

    const json = await web3Res.json()
    if (!json.success) {
        console.error('Web3Forms error:', json)
        return NextResponse.json(
            { error: json.error || 'Submission failed' },
            { status: 500 }
        )
    }

    return NextResponse.json({ success: true })
}
