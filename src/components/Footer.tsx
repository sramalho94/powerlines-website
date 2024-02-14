import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function Footer() {
  return (
    <section className="flex flex-col justify-center h-auto min-w-screen max-w-screen items-center bg-main-two pb-5 md:pb-0 md:py-10 lg:h-72 lg:flex-row">
      {/* Left hand side of Footer */}
      <section
        className={`flex flex-col flex-1 items-center min-w-screen justify-center pb-3 align-middle md:flex-row md:pb-0 ${cairo.className}`}
      >
        <section className="relative flex flex-col justify-center h-[65px] w-[180px] md:mr-6 md:h-[117px] md:w-[313px]">
          <Image
            src="/PowerlinesLogoFooterTagline.png"
            fill
            alt="logo"
            className="md:mt-3"
          />
        </section>
        {/* Text Container */}
        {/* <section className="flex flex-col justify-center md:ml-32"> */}
        {/* Title text */}
        {/* <section className="flex flex-row font-bold mb-3 text-xl space-x-2 md:space-x-0 md:text-2xl md:flex-col">
            <h2 className="flex flex-row justify-center md:justify-start">
              Bringing <span className="text-main-one pl-3">Power</span>
            </h2>
            <h2 className="flex flex-row justify-center md:justify-start">
              to the Public
            </h2>
          </section> */}

        {/* Subtitle text */}
        {/* <h3
            className={`${robotoSlab.className} text-center md:text-left`}
          >
            NGO passionate about reshaping the <br /> energy system
          </h3>
        </section> */}
      </section>

      {/* Right hand/Bottom side of Footer */}
      <section
        className={`flex flex-1 flex-col items-center  justify-center  my-auto text-2xl ${cairo.className} border-t pt-4 border-t-black md:flex-row md:justify-start lg:border-t-0 lg:border-l-2 lg:border-l-yellow-300 lg:pt-0`}
      >
        {/* Nav List */}
        <ul className="flex flex-col space-y-3 pt-2 pl-2 text-center md:text-left md:pr-16 lg:pr-0 lg:pt-0 lg:pl-32">
          <li>
            <Link href="/our-work">
              <p>Our Work</p>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <p></p>About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <p>Contact Us</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <section className="flex flex-col justify-center pt-2 md:pt-0 md:pl-32 lg:pl-32">
          <h3 className="hidden md:block">Stay Connected</h3>

          {/* Link Container */}
          <section className="flex flex-row space-x-10 pt-3">
            <Link href="google.com">
              <Image
                src="/linkedinlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/twitterlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/facebooklogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
          </section>
          {/* Copyright */}
          <section className="flex flex-row justify-center mt-10 my-auto md:hidden">
            <Image
              src="/copyright.svg"
              height={12}
              width={12}
              alt=""
              className="pb-1"
            />
            <p className="pl-1 text-sm">2023 Powerlines</p>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Footer
