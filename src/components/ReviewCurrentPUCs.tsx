import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import UsMap from './USMap'

function ReviewCurrentPUCs() {
  return (
    <div className="">
        {/* Heading and buttons block container */}
        <section className='my-24 mx-32'>
            <div>
                <h1 className={`text-4xl font-bold leading-8 ${cairo.className} text-yellow-500`}>REVIEW CURRENT PUCs</h1>
                <p className='font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            
            {/* buttons container */}
            <div className='text-center mx-auto mt-10'>
                <p>View:</p>
                <div className='inline-block justify-center items-center bg-gray-200 rounded-full mt-2 space-x-2'>
                    <button className='px-8 py-2 bg-yellow-500 rounded-full'>
                        Database
                    </button>
                    <button className='px-8 py-2'>
                        Contributions
                    </button>
                </div>
            </div>
        </section>
        
        {/* Map Section */}
        <section>
            <UsMap />
        </section>
     
    </div>
  )
}

export default ReviewCurrentPUCs