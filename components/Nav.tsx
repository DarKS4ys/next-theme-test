"use client"

import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'

export default function Nav() {
return (
    <header className='fixed top-0 left-0 right-0 bg-opacity-80 backdrop-blur-md bg-white dark:bg-black shadow-md'>
        <ul className='flex items-center justify-between px-24 py-8'>
            <li>
                <a>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                    />
                </a>
            </li>
            <li>
                <ModeToggle/>
            </li>
        </ul>
    </header>
  )
}
