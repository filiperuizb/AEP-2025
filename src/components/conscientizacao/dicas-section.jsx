"use client"

import { useEffect, useRef } from "react"
import { HiRefresh, HiHeart, HiLightBulb, HiShoppingBag, HiBeaker, HiStar } from "react-icons/hi"
import "./dicas-section.css"

function DicasSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dicas-animate")
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

  const dicas = [
    {
      icon: <HiRefresh />,
      titulo: "Reduza, Reutilize, Recicle",
      descricao:
        "Aplique os 3 R's no seu dia a dia. Reduza o consumo, reutilize materiais e recicle sempre que possível.",
    },
    {
      icon: <HiShoppingBag />,
      titulo: "Sacolas Reutilizáveis",
      descricao: "Use sacolas de pano ou ecobags para suas compras. Uma pequena mudança com grande impacto.",
    },
    {
      icon: <HiBeaker />,
      titulo: "Produtos Naturais",
      descricao: "Prefira produtos de limpeza biodegradáveis e cosméticos com embalagens sustentáveis.",
    },
    {
      icon: <HiLightBulb />,
      titulo: "Consumo Consciente",
      descricao: "Compre apenas o necessário. Planeje suas compras e evite o desperdício de alimentos.",
    },
    {
      icon: <HiHeart />,
      titulo: "Compostagem",
      descricao: "Transforme restos orgânicos em adubo. A compostagem reduz o lixo e nutre o solo.",
    },
    {
      icon: <HiStar />,
      titulo: "Educação Ambiental",
      descricao: "Compartilhe conhecimento! Ensine amigos e família sobre práticas sustentáveis.",
    },
  ]

  return (
    <div className="dicas-section section-observer" ref={sectionRef}>
      <div className="dicas-background"></div>
      <div className="section-title">
        <h2>
          <span className="dicas">DICAS</span> PARA UM <span className="futuro">FUTURO</span> MELHOR
        </h2>
        <p>Pequenas ações que fazem uma grande diferença para o planeta</p>
      </div>

      <div className="dicas-grid">
        {dicas.map((dica, index) => (
          <div key={index} className="dica-card">
            <div className="dica-icon">{dica.icon}</div>
            <h3>{dica.titulo}</h3>
            <p>{dica.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DicasSection
