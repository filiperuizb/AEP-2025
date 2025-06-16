"use client"

import { useEffect, useRef } from "react"
import { HiPlusCircle, HiUserGroup } from "react-icons/hi"
import { FaInfinity } from "react-icons/fa"
import "./acao-section.css"

function AcaoSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("acao-animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="acao-section section-observer" ref={sectionRef}>
      <div className="acao-background"></div>
      <div className="acao-content">
        <div className="acao-icon">
          <HiUserGroup />
        </div>
        <h2>
          <span className="juntos">JUNTOS</span> PODEMOS <span className="mais">MAIS</span>
        </h2>
        <p className="acao-description">
          A mudança começa com você! Faça parte da solução reportando problemas ambientais em sua comunidade.
        </p>

        <div className="acao-buttons">
          <button className="btn-primary" onClick={() => (window.location.href = "/")}>
            <HiPlusCircle />
            Fazer um Report
          </button>

          <button className="btn-secondary" onClick={() => (window.location.href = "/dashboard")}>
            Ver Dashboard
          </button>
        </div>

        <div className="acao-stats">
          <div className="stat-item">
            <div className="stat-number-container">
              <span className="stat-number">1</span>
            </div>
            <span className="stat-label">pessoa pode fazer a diferença</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number-container">
              <FaInfinity className="stat-infinity" />
            </div>
            <span className="stat-label">possibilidades de mudança</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcaoSection
