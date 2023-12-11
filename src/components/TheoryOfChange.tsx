import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })


function TheoryOfChange() {

  return (
    <section className="min-w-screen max-w- bg-section-yellow ">
    <section className="flex flex-row justify-center">
      <section className="flex flex-col items-center justify-center">
        <h2 className={`font-bold tracking-wider text-2xl  text-center md:text-3xl mt-8 md:mt-28 ${josefinSans.className}`}>
         THEORY OF CHANGE
        </h2>
      </section>
    </section>
    <section className="flex flex-row flex-1 justify-center min-w-screen my-auto mb-10">
      <section
        className={`flex flex-col ${playfairDisplay.className} flex flex-col items-center  max-w-screen md:min-w-screen md:tracking-wider md:text-xl mt-10`}
      >
        <h2 className=" max-w-screen text-center md:min-w-screen mb-10 mx-10">
        We aim to reshape the energy system by accelerating clean energy and equity through <br/> utility regulation by targeting state public utilities commissions. To tackle this challenge, PowerLines pursues a three-part theory of change.
        </h2>

        {/* Cards */}
        <section className="flex flex-wrap justify-center">
     
        <section className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mt-5 mb-5 bg-white flex flex-col h-428 w-400">
   <section className="bg-local-image bg-cover bg-center mt-5 h-113 w-140">
      <Image src="/politicalStrategyIcon (2).svg" alt="political strategy icon" width={113} height={140} className="color-yellow md:mt-3 mx-auto" />
      </section>
      <section className="px-6 py-4 flex-grow">
        <section className="font-bold text-xl mb-2">Political Strategy</section>
        <ul className="list-inside text-black-400 text-base p-5">
          <li>&#10003; Appoints Champions</li>
          <li>&#10003; Elects Champions</li>
        </ul>
      </section>
    
    <section className="text-center mb-5">
      <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main-yellow bg-main-white border-2 border-main-yellow rounded-lg">
        Learn More
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </section>
  </section>

  <section className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mt-5 mb-5 bg-white flex flex-col h-428 w-400">
  <section className="bg-local-image bg-cover bg-center mt-5 h-113 w-140">
      <Image src="/modelLegislationIcon.svg" alt="model legislation icon" width={140} height={113} className="color-yellow md:mt-3 mx-auto" />
      </section>
      <section className="px-6 py-4 flex-grow">
        <section className="font-bold text-xl mb-2">Model Legislation</section>
        <ul className="list-inside text-black-400 text-base p-5">
          <li>&#10003; Passes Legislation</li>
          <li>&#10003; Lorem Ipsum</li>
        </ul>
      </section>
    <section className="text-center mb-5">
      <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main-yellow bg-main-white border-2 border-main-yellow rounded-lg">
        Learn More
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </section>
  </section>
  

  <section className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mt-5 mb-5 bg-white flex flex-col h-428 w-400">
  <section className="bg-local-image bg-cover bg-center mt-5 h-113 w-140">
      <Image src="/stakeholderEngagementIcon.svg" alt="stakeholder engagement icon" width={140} height={113} className="color-yellow md:mt-3 mx-auto" />
      </section>
      <section className="px-6 py-4 flex-grow">
        <section className="font-bold text-xl mb-2">Stakeholder Engagement</section>
        <ul className="list-inside text-black-400 text-base p-5">
          <li>&#10003; Youth Groups</li>
          <li>&#10003; The Public</li>
          <li>&#10003; Environmental Justice</li>
        </ul>
      </section>
    <section className="text-center mb-5">
      <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main-yellow bg-main-white border-2 border-main-yellow rounded-lg">
        Learn More
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </section>
  </section> 
</section>

      </section>
    </section>
  </section>
 
  )
}

export default TheoryOfChange