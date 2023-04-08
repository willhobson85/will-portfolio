"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about"
  },
  {
    label: "Projects",
    page: "projects"
  }
]

const Navbar =() => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 bg-lime-900 text-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home" className="cursor-pointer">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">William Hobson</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)} > 
                {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "text-white block cursor-pointer lg:inline-block hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >{item.label}</Link>
                )
              })}
              {currentTheme === "dark" ?(
                <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl" aria-label="light mode">
                  <RiSunLine size={20} color="black"/>
                </button>
              ) : (
                <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl" aria-label="dark mode">
                  <RiMoonFill size={20} color="black" />
                </button>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar