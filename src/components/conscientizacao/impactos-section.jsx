"use client"

import { useEffect, useRef } from "react"
import { HiExclamationCircle, HiTrendingDown, HiLightningBolt, HiShieldExclamation } from "react-icons/hi"
import "./impactos-section.css"

function ImpactosSection() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")

            const cards = entry.target.querySelectorAll(".impacto-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("card-animate")
              }, index * 200)
            })
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

  const impactos = [
    {
      icon: <HiExclamationCircle />,
      titulo: "Saúde Pública",
      descricao: "O acúmulo de lixo favorece a proliferação de vetores de doenças como dengue, zika e chikungunya.",
      cor: "red",
    },
    {
      icon: <HiTrendingDown />,
      titulo: "Qualidade do Ar",
      descricao:
        "A queima inadequada de resíduos libera gases tóxicos que poluem o ar e causam problemas respiratórios.",
      cor: "orange",
    },
    {
      icon: <HiLightningBolt />,
      titulo: "Recursos Naturais",
      descricao: "O descarte incorreto contamina solo e água, afetando ecossistemas e a biodiversidade local.",
      cor: "blue",
    },
    {
      icon: <HiShieldExclamation />,
      titulo: "Mudanças Climáticas",
      descricao:
        "Aterros sanitários inadequados produzem metano, um dos gases que mais contribuem para o efeito estufa.",
      cor: "purple",
    },
  ]

  return (
    <div className="impactos-section section-observer" ref={sectionRef}>
      <div className="impactos-background"></div>
      <div className="section-title">
        <h2>
          <span className="impactos">IMPACTOS</span> DO <span className="lixo">LIXO</span>
        </h2>
        <p>Entenda como o descarte inadequado afeta nossa vida e o meio ambiente</p>
      </div>

      <div className="impactos-grid">
        {impactos.map((impacto, index) => (
          <div key={index} className={`impacto-card ${impacto.cor}`} ref={(el) => (cardRefs.current[index] = el)}>
            <div className="card-icon">{impacto.icon}</div>
            <h3>{impacto.titulo}</h3>
            <p>{impacto.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImpactosSection
