"use client"

import { useEffect, useRef } from "react"
import { HiTrendingUp, HiGlobeAlt, HiClock, HiExclamation } from "react-icons/hi"
import "./estatisticas-section.css"

function EstatisticasSection() {
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

  const estatisticas = [
    {
      icon: <HiTrendingUp />,
      numero: "2.01",
      unidade: "BILHÕES",
      titulo: "DE TONELADAS DE LIXO",
      descricao: "são produzidas anualmente no mundo, um número que cresce 70% a cada década",
      cor: "green",
    },
    {
      icon: <HiGlobeAlt />,
      numero: "32%",
      unidade: "",
      titulo: "DO LIXO MUNDIAL NÃO É GERENCIADO",
      descricao: "de forma ambientalmente segura, causando poluição do solo, água e ar",
      cor: "blue",
    },
    {
      icon: <HiClock />,
      numero: "450",
      unidade: "ANOS",
      titulo: "É O TEMPO QUE UMA GARRAFA PLÁSTICA",
      descricao: "leva para se decompor na natureza, permanecendo no ambiente por séculos",
      cor: "orange",
    },
    {
      icon: <HiExclamation />,
      numero: "8",
      unidade: "MILHÕES",
      titulo: "DE TONELADAS DE PLÁSTICO",
      descricao: "chegam aos oceanos todos os anos, formando verdadeiras ilhas de lixo",
      cor: "red",
    },
  ]

  return (
    <div className="estatisticas-section section-observer">
      <div className="stats-background"></div>
      <div className="titulo-stats" ref={titleRef}>
        <span className="dados">DADOS</span> QUE <span className="preocupam">PREOCUPAM</span>
      </div>
      <p className="subtitulo-stats">Números que mostram a urgência de mudanças em nossos hábitos</p>

      <div className="container-stats">
        {estatisticas.map((stat, index) => (
          <div key={index} className="card-stat" ref={(el) => (cardRefs.current[index] = el)}>
            <div className="card-inner">
              <div className={`card-front ${stat.cor}`}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  <span className="numero">{stat.numero}</span>
                  <span className="unidade">{stat.unidade}</span>
                </div>
                <span className="titulo-stat">{stat.titulo}</span>
              </div>
              <div className={`card-back ${stat.cor}`}>
                <p>{stat.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EstatisticasSection
