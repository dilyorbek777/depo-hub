import Hero from '@/components/site/hero'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />
      <Image src={'/bg-depo.png'} alt='Depohub image depo hub vercel dilyorbek' priority  className='mx-auto w-4/12' width={1000}  height={0} />
      
    </div>
  )
}
