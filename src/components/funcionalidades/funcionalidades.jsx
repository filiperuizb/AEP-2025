import React from "react";
import "./funcionalidades.css";
import lixo from "../../img/lixo.png";
import impactos from "../../img/impactos.png";
import dicas from "../../img/dicas.png";

function Funcionalidade() {
    return (
        <div className="func-body">
            <div className="titulo-func">
                <span>O QUE VOCÊ ENCONTRARÁ </span> 
                <span className="verde">AQUI?</span> 
            </div>
            
            <div className="container-func">
                <div className="card-func">
                    <img src={lixo} alt="Lixo acumulado" className="img-func" />
                    <span className="texto-func">DENUNCIAR ACÚMULO DE LIXO</span>
                </div>

                <div className="card-func">
                    <img src={impactos} alt="Impactos ambientais" className="img-func" />
                    <span className="texto-func">IMPACTOS DO LIXO NA SAÚDE E NO MEIO AMBIENTE</span>
                </div>

                <div className="card-func">
                    <img src={dicas} alt="Dicas de sustentabilidade" className="img-func" />
                    <span className="texto-func">DICAS DE SUSTENTABILIDADE</span>
                </div>
            </div>
        </div>
    );
}

export default Funcionalidade;
