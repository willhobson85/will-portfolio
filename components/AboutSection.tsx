import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" }, 
  { skill: "CSS" }, 
  { skill: "JavaScript" }, 
  { skill: "TypeScript" }, 
  { skill: "React" }, 
  { skill: "Material-UI" }, 
  { skill: "Next.js" }, 
  { skill: "Tailwind CSS" }, 
  { skill: "Git" }, 
  { skill: "GitHub" }, 
  { skill: "Cypress.io" },
  { skill: "Mocha" }, 
  { skill: "Chai" }
]

const AboutSection = () => {
  return ( 
  <section id="about">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-24 h-1 mx-auto my-4 bg-lime-800 border-0 rounded"></hr>  
      </h1>
      <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10" >
        <div className="md:w-1/2">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
          <p>
            Hi, my name is Will, and I am a {" "}
            <span className="font-bold">{" driven"}</span>,  
            <span className="font-bold">{" determined"}</span>, and 
            <span className="font-bold">{" dependable"}</span> {" "}
            Software Developer based in Knoxville, TN.
          </p>
          <br />
          <p>
            After working in food service, customer service, and banking for years, I decided to go back to school, and I graduated from Turing School of Software and Design&#39;s {" "}
            <span className="font-bold text-lime-800">Front-End Engineering</span> {" "}
            program in January 2023.
          </p>
          <br />
          <p>
            I love to create things, so during Covid lockdown, I learned to hand-bind journals and started learning leatherworking. Being able to create something fun is what lead me to decide to learn coding. I like being able to design something from the ground up, and then see it in action!
          </p>
          <br />
          <p>
            I believe you should treat everyone with {" "}
            <span className="font-bold text-lime-800">kindness</span> {" "}
            and {" "}
            <span className="font-bold text-lime-800">respect</span>, and this is the energy I bring to any team I&#39;m a part of. I have a passion for technology and learning, and I would love to connect with like-minded people.


          </p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p 
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-zinc-800 rounded font-semibold"
                >
                  {item.skill}
                </p>
              )
            })}
          </div>
          <Image 
            className="hidden md:mt-6 md:block md:relative md:bottom-4 md:left-14 md:z-0"
            src="/happy-coding.png" 
            alt="happy person working with laptop" 
            width={325} 
            height={325} 
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection