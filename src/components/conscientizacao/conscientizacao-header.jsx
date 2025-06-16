"use client"

import { useEffect, useRef } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import "./conscientizacao-header.css"

function ConscientizacaoHeader() {
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
    <div className="conscientizacao-header-container">
      <div className="particles-background"></div>
      <div id="texto-header" ref={textRef}>
        <div className="icon-header">
          <FaExclamationTriangle className="warning-icon" />
          <HiHeart className="heart-icon" />
        </div>
        <h3 className="welcome-text">Conscientização Ambiental</h3>
        <h1 className="title-text">
          <span className="cuidar">CUIDAR</span> DO <span className="planeta">PLANETA</span>
        </h1>
        <div className="header-underline"></div>
        <p className="subtitle-text">
          Cada ação conta para construir um futuro mais sustentável. Descubra como você pode fazer a diferença!
        </p>
      </div>
    </div>
  )
}

export default ConscientizacaoHeader
