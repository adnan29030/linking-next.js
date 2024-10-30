import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='bg-red-600 flex'>
        <div className='font-extrabold text-5xl'>
            <span >A</span>
        <span className='text-2xl'>A</span></div>
        
        <ul className='bg-red-600 flex gap-5' >
            <li className='mt-5 ms-8 font-semibold '><Link href="/">Home</Link></li>
            <li className='mt-5 font-semibold'><Link href="/">About</Link></li>
            <li className='mt-5 font-semibold'><Link href="/pakistan">Pakistan</Link></li>
        </ul>
    </div>
  )
}

export default Header