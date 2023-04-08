import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Simple Note App",
    description: "I wanted to learn to use Material-UI, so I built a simple note app. This app uses a local server to store data.",
    image: "/Material-UI-1.png",
    github: "https://github.com/willhobson85/Material-UI-Note-App",
    link: "https://github.com/willhobson85/Material-UI-Note-App",
  },
  {
    name: "NYT Reader",
    description: "Application that uses the NYT Top Stories API to load a list of articles with a brief description, image, and link to the story on the NYT website. Users can sort articles alphabetically, or reverse alphabetically.",
    image: "/NYT-Reader.gif",
    github: "https://github.com/willhobson85/nyt-reader",
    link: "https://github.com/willhobson85/nyt-reader",
  },
  {
    name: "Equilibrium",
    description: "A group project from my time at Turing. Equilibrium allows users to find a therapist that can help with their specific needs. This project used GraphQL, and was tested with Cypress.",
    image: "/Equilibrium.gif",
    github: "https://github.com/IOTNBO-Capstone/Equilibrium-FE",
    link: "https://equilibrium-iotnbo.netlify.app/",
  },
  {
    name: "Vocabulary Extender",
    description: "This app allows you to search the BigHugeThesaurus API for a word, viewing synonyms and antonyms. You can save the card to a separate page of saved cards, or remove it from the list. After navigating to the saved list, you are able to unsave a card.",
    image: "/vocab.png",
    github: "https://github.com/willhobson85/vocabulary-extender",
    link: "https://vocabulary-extender.vercel.app/",
  },
  {
    name: "A&W Movie Time",
    description: "Paired project from my time at Turing. This app uses theMovieDatabase's API to load 60 top movies. Users are able to search for a movie by title. Clicking on the movie allows you to see details about that film, as well as view any available trailers.",
    image: "/AW-Movie-Time-1.gif",
    github: "https://github.com/willhobson85/A-W-Movie-Time",
    link: "https://rancid-tomatillos-ivory.vercel.app/",
  },
  // {
  //   name: "",
  //   description: "",
  //   image: "",
  //   github: "",
  //   link: "",
  // },
]

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>    
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image 
                        src={project.image}
                        alt="image for project"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          aria-label="Link to GitHub"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          aria-label="Link to project"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectSection