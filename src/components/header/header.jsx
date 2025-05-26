"use client"

import { useEffect, useRef } from "react"
import "./header.css"

function Header() {
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <div className="header-container">
      <div className="particles-background"></div>
      <div id="texto-header" ref={textRef}>
        <h3 className="welcome-text">Olá, bem-vindo ao nosso projeto</h3>
        <h1 className="title-text">AEP 2025 3° SEMESTRE</h1>
        <div className="header-underline"></div>
      </div>
      <div className="card">
        <div className="card-body"></div>
      </div>
    </div>
  )
}

export default Header
