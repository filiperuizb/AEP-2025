"use client"

import { useEffect } from "react"
import Navbar from "../../components/navbar/navbar"
import Header from "../../components/header/header"
import Sobre from "../../components/sobre/sobre"
import Funcionalidade from "../../components/funcionalidades/funcionalidades"
import Equipe from "../../components/equipe/equipe"
import Footer from "../../components/footer/footer"
import "./home.css"

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax-bg")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.5
        element.style.transform = `translateY(${scrollY * speed}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="home-container">
      <div className="parallax-bg bg-1" data-speed="0.3"></div>
      <div className="parallax-bg bg-2" data-speed="0.5"></div>
      <div className="parallax-bg bg-3" data-speed="0.2"></div>

      <div id="navbar">
        <Navbar />
      </div>
      <div id="header">
        <Header />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <div id="funcionalidade">
        <Funcionalidade />
      </div>
      <div id="equipe">
        <Equipe />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home
