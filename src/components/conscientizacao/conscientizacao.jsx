"use client"

import { useEffect, useRef } from "react"
import ConscientizacaoHeader from "./conscientizacao-header"
import ImpactosSection from "./impactos-section"
import EstatisticasSection from "./estatisticas-section"
import DicasSection from "./dicas-section"
import AcaoSection from "./acao-section"
import "./conscientizacao.css"

function Conscientizacao() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = containerRef.current?.querySelectorAll(".section-observer")
    sections?.forEach((section) => observer.observe(section))

    return () => {
      sections?.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="conscientizacao-container" ref={containerRef}>
      <ConscientizacaoHeader />
      <ImpactosSection />
      <EstatisticasSection />
      <DicasSection />
      <AcaoSection />
    </div>
  )
}

export default Conscientizacao
