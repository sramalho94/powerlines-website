import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurPrinciples() {
  return (
    <section className="min-w-screen max-w-screen">
          <section className="flex flex-wrap bg-light-yellow"> 
{/* 
Text Column  */}
 <section className=" w-full md:w-1/3 flex items-center justify-center h-auto ">
 <Image width={686} height={424}layout="responsive" src="/powerlines.png" alt="solar panels and windmill" />
  </section>
   {/* Image Column  */}
   <section className="w-full pt-12 pl-0 md:w-1/3 pl-4">
    <Image width={425} height={424}layout="responsive" src="/plantPowerlineTower.png" alt="plant powerline tower" />
  </section>
  <p className={`text-3xl font-semibold leading-9 my-24 ml-16 ${josefinSans.className}`}> Were an Organization that champions people and<br/> communities to address climate & environmental issues.</p>
  <section className="w-full 3/3">
  <p className={`text-3xl font-semibold leading-9 my-2 ml-16 text-main-yellow mb-10 ${josefinSans.className}`}>Our Principles</p>
  </section>
 </section>
 <section>
 <section>

 </section>
 </section>
    </section>
  )
}

export default OurPrinciples