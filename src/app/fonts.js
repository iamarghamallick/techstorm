import { Inter, Roboto_Mono, Righteous, Actor, Poppins, Pixelify_Sans } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const actor = Actor({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400"],
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
})

export const righteous = Righteous({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400"],
})

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700"],
})

export const pixelify = Pixelify_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700"],
})