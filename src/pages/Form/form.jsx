"use client"

import { useEffect } from "react"
import Navbar from "../../components/navbar/navbar"
import FormComponent from "../../components/form/form"
import Footer from "../../components/footer/footer"
import "./form.css"

function FormPage() {
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
    <div className="form-page-container">
      <div className="parallax-bg bg-1" data-speed="0.3"></div>
      <div className="parallax-bg bg-2" data-speed="0.5"></div>
      <div className="parallax-bg bg-3" data-speed="0.2"></div>

      <Navbar />
      <FormComponent />
      <Footer />
    </div>
  )
}

export default FormPage
