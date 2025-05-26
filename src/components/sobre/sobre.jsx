"use client"

import { useEffect, useRef } from "react"
import "./sobre.css"
import globo from "../../img/globo.png"

function Sobre() {
  const titleRef = useRef(null)
  const text1Ref = useRef(null)
  const globoRef = useRef(null)
  const text2Ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = [titleRef.current, text1Ref.current, globoRef.current, text2Ref.current]
    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="sobre-body">
      <div className="sobre-background"></div>
      <div className="texto-titulo" ref={titleRef}>
        <span className="lixo">Lixo</span>
        <span className="zero">Zero</span>
      </div>
      <div className="texto-explica" ref={text1Ref}>
        <span>
          O Lixo Zero é uma campanha voltada para a conscientização da população sobre os impactos do acúmulo de lixo e
          a importância do descarte correto. O acúmulo de resíduos pode trazer sérios riscos à saúde pública,
          contribuindo para a proliferação de doenças, além de degradar o meio ambiente e comprometer a qualidade de
          vida nas cidades.
        </span>
      </div>
      <div className="globo" ref={globoRef}>
        <div className="globo-wrapper">
          <img src={globo || "/placeholder.svg"} alt="imagemglobo" />
          <div className="globo-glow"></div>
        </div>
      </div>
      <div className="texto-explica2" ref={text2Ref}>
        <span>
          Nosso objetivo é incentivar práticas sustentáveis e fornecer informações sobre como cada pessoa pode
          contribuir para um ambiente mais limpo e organizado. Construir uma cidade mais sustentável depende de todos
          nós.
        </span>
      </div>
    </div>
  )
}

export default Sobre
