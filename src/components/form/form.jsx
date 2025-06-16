"use client"

import { useState, useEffect, useRef } from "react"
import "./form.css"
import { salvarReport } from "../../assets/utils/localStorage.js"
import image from "../../img/imageUpload.png"
import banner from "../../img/banner.png"

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    reference: "",
    message: "",
    image: null,
  })

  const [imagePreview, setImagePreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const reportId = Date.now().toString()

      salvarReport(reportId, formData.name, formData.phone, formData.address, formData.reference, imagePreview)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      alert("Formulário enviado e salvo com sucesso!")
      handleClear()
    } catch (error) {
      alert("Erro ao enviar formulário. Tente novamente.")
      console.error("Erro:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClear = () => {
    setFormData({
      name: "",
      phone: "",
      address: "",
      reference: "",
      message: "",
      image: null,
    })
    setImagePreview(null)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("form-animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current)
      }
    }
  }, [])

  return (
    <div className="centralizar form-page">
      <div className="form-background"></div>
      <div className="form-container formulario generalMargin" ref={formRef}>
        <h1 className="titleMargin">Formulário de Reporte</h1>
        <form onSubmit={handleSubmit}>
          <div className="textInputsOnly marginForAll">
            <div className="entrada">
              <label htmlFor="name">Nome:</label>
              <input
                className="inputFull"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="entrada">
              <label htmlFor="phone">Telefone:</label>
              <input
                className="inputFull"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            <div className="entrada">
              <label htmlFor="address">Endereço:</label>
              <input
                className="inputFull"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Rua, número, bairro, cidade"
                required
              />
            </div>

            <div className="entrada">
              <label htmlFor="reference">Ponto de referências:</label>
              <input
                className="inputFull"
                type="text"
                id="reference"
                name="reference"
                value={formData.reference}
                onChange={handleChange}
                placeholder="Ex: Próximo ao mercado, escola..."
                required
              />
            </div>
          </div>

          <div className="textInputsOnly marginForAll">
            <div className="entrada centralizar imageInput paddingImageInput">
              {imagePreview ? (
                <div className="preview-container">
                  <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="image-preview" />
                  <button
                    type="button"
                    className="remove-image"
                    onClick={() => {
                      setImagePreview(null)
                      setFormData((prev) => ({ ...prev, image: null }))
                    }}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <>
                  <img className="imageInputSize" src={image || "/placeholder.svg"} alt="Upload de imagem" />
                  <p className="upload-text">Clique para fazer upload da imagem</p>
                  <input
                    type="file"
                    id="imagem"
                    name="imagem"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                  />
                </>
              )}
            </div>
          </div>

          <div className="bannerWrapper">
            <img className="bannerImage" src={banner || "/placeholder.svg"} alt="Banner" />
          </div>

          <div className="entrada marginForAll">
            <label htmlFor="message">Mensagem:</label>
            <textarea
              className="inputFull insideTextArea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva detalhadamente o problema encontrado..."
              required
            ></textarea>
          </div>

          <div className="centralizar buttonSubmitArea marginForAll">
            <button className="btn buttonClear" type="button" onClick={handleClear} disabled={isSubmitting}>
              Limpar
            </button>
            <button className="btn buttonSubmit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
