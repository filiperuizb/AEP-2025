import React from "react";
import "./form.css";
import image from "../../img/imageUpload.png";
import banner from "../../img/banner.png";

function Form() {
    return (
        <div className="centralizar">
            <div className="form-container formulario generalMargin">
                <h1 className="titleMargin">Formulário de Reporte</h1>
                <form>
                    <div className="textInputsOnly marginForAll">
                        {/* Nome */}
                        <div className="entrada">
                            <label htmlFor="name">Nome:</label>
                            <input className="inputFull" type="text" id="name" name="name" required />
                        </div>

                        {/* Telefone */}
                        <div className="entrada">
                            <label htmlFor="phone">Telefone:</label>
                            <input className="inputFull" type="tel" id="phone" name="phone" required />
                        </div>

                        {/* Endereço */}
                        <div className="entrada">
                            <label htmlFor="address">Endereço:</label>
                            <input className="inputFull" type="text" id="address" name="address" required />
                        </div>

                        {/* Ponto de referência */}
                        <div className="entrada">
                            <label htmlFor="reference">Ponto de referência:</label>
                            <input className="inputFull" type="text" id="reference" name="reference" required />
                        </div>
                    </div>

                    <div className="textInputsOnly marginForAll">
                        {/* Upload de Imagem */}
                        <div className="entradas centralizar imageInput paddingImageInput">
                            <img className="imageInputSize" src={image} alt="Upload de imagem" />
                            <input type="file" id="imagem" name="imagem" accept="image/*" />
                        </div>
                    </div>
                    
                    {/* Banner */}
                    <div className="bannerwRAPPER">
                        <img className="bannerImage" src={banner} alt="Upload de imagem" />
                    </div>

                    {/* Mensagem */}
                    <div className="entrada marginForAll">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea className="inputFull insideTextArea" id="message" name="message" required></textarea>
                    </div>

                   {/* Botão */}
                    <div className="centralizar buttonSubmitArea marginForAll">
                        <button className="btn buttonClear" type="submit">Limpar</button>
                        <button className="btn buttonSubmit" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
