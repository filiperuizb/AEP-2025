"use client"

import { useEffect, useRef } from "react"
import "./funcionalidades.css"
import lixo from "../../img/lixo.png"
import impactos from "../../img/impactos.png"
import dicas from "../../img/dicas.png"

function Funcionalidade() {
  const titleRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("title-animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("card-animate")
            }, index * 200)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current)
      }

      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  return (
    <div className="func-body">
      <div className="func-background"></div>
      <div className="titulo-func" ref={titleRef}>
        <span>O QUE VOCÊ ENCONTRARÁ </span>
        <span className="verde">AQUI?</span>
      </div>

      <div className="container-func">
        <div className="card-func" ref={(el) => (cardRefs.current[0] = el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={lixo || "/placeholder.svg"} alt="Lixo acumulado" className="img-func" />
              <span className="texto-func">DENUNCIAR ACÚMULO DE LIXO</span>
            </div>
            <div className="card-back">
              <p>Ajude a manter sua cidade limpa reportando locais com acúmulo de lixo.</p>
            </div>
          </div>
        </div>

        <div className="card-func" ref={(el) => (cardRefs.current[1] = el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={impactos || "/placeholder.svg"} alt="Impactos ambientais" className="img-func" />
              <span className="texto-func">IMPACTOS DO LIXO NA SAÚDE E NO MEIO AMBIENTE</span>
            </div>
            <div className="card-back">
              <p>Conheça os efeitos negativos do descarte incorreto de resíduos na saúde pública e no meio ambiente.</p>
            </div>
          </div>
        </div>

        <div className="card-func" ref={(el) => (cardRefs.current[2] = el)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={dicas || "/placeholder.svg"} alt="Dicas de sustentabilidade" className="img-func" />
              <span className="texto-func">DICAS DE SUSTENTABILIDADE</span>
            </div>
            <div className="card-back">
              <p>
                Aprenda práticas sustentáveis para reduzir a produção de lixo e contribuir para um planeta mais
                saudável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Funcionalidade
