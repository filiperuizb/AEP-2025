"use client"

import { useEffect, useRef } from "react"
import "./equipe.css"
import data from "../../data/equipe.json"
import { FaGithub } from "react-icons/fa"

function Equipe() {
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
            }, index * 150)
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
    <section className="equipe">
      <div className="equipe-background"></div>
      <span className="texto-integrantes" ref={titleRef}>
        Integrantes do Projeto
      </span>
      <div className="equipe-container">
        {data.map((membro, index) => (
          <div key={membro.id} className="equipe-card" ref={(el) => (cardRefs.current[index] = el)}>
            <div className="borda">
              <img src={membro.img || "/imgEquipe/default.png"} alt={membro.nome} className="equipe-img" />
              <div className="equipe-overlay"></div>
            </div>
            <h3>{membro.nome}</h3>
            <p>{membro.cargo}</p>
            {membro.github && (
              <a href={membro.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Equipe
