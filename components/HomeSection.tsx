"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'

const HomeSection = () => {
  return (
    <section id='home'>
      <div className="flex flex-col text-center items-center justify-center my-28 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:my-28 md:py-28">
        <div className='md:ml-16 md:mt-2 md:w-1/2'>
          <Image 
            className='rounded-full md:rounded-md'
            src="/headshot.PNG" 
            alt='image of Will Hobson' 
            width={300} 
            height={300} 
          />
        </div>
        <div className="md:mt-2 md:w-1/2">
          <h1 className="font-bold text-3xl mt-6 md:text-5xl md:mt-0">Hi, I&#39;m Will Hobson!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">I&#39;m a Software Engineer based in Knoxville, TN. I want to build {" "}
            <span className="font-semibold text-lime-800">accessible {" "}</span>
            apps that anyone can use.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-lime-800 rounded shadow cursor-pointer hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            aria-label="Link to project section"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="mt-5 flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HomeSection