import React from "react";
import "./sobre.css";
import globo from "../../img/globo.png"

function Sobre() {
    return (
        <div className="sobre-body">
            <div className="texto-titulo">
                <span className="lixo">Lixo</span><span className="zero">Zero</span>
            </div>
            <div className="texto-explica">
                <span>
                O Lixo Zero é uma campanha voltada para a conscientização da população sobre os impactos do acúmulo de lixo e a importância do descarte correto. 
                O acúmulo de resíduos pode trazer sérios riscos à saúde pública, contribuindo para a proliferação de doenças, 
                além de degradar o meio ambiente e comprometer a qualidade de vida nas cidades.
                </span>
            </div>
            <div className="globo">
                <img src={globo} alt="imagemglobo" />
            </div>
            <div className="texto-explica2">
                <span>
                Nosso objetivo é incentivar práticas sustentáveis e fornecer informações sobre como cada pessoa pode contribuir para um ambiente mais limpo e organizado. 
                Construir uma cidade mais sustentável depende de todos nós.
                </span>
            </div>
        </div>
    )
}

export default Sobre;