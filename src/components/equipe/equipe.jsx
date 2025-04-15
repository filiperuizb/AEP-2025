import React from "react";
import "./equipe.css";
import data from "../../data/equipe.json";
import { FaGithub } from "react-icons/fa"; 

function Equipe() {
    return (
        <section className="equipe">
            <span className="texto-integrantes">Integrantes do Projeto</span>
            <div className="equipe-container">
                {data.map((membro) => (
                    <div key={membro.id} className="equipe-card">
                        <div className="borda">
                            <img
                                src={membro.img || "/imgEquipe/default.png"}
                                alt={membro.nome}
                                className="equipe-img"
                            />
                        </div>
                        <h3>{membro.nome}</h3>
                        <p>{membro.cargo}</p>
                        {membro.github && (
                            <a
                                href={membro.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                <FaGithub />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Equipe;
