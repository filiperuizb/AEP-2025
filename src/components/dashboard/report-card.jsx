"use client"

import { useState } from "react"
import "./report-card.css"
import { HiEye, HiEyeOff, HiTrash, HiLocationMarker, HiPhone } from "react-icons/hi"

function ReportCard({ report, onDelete }) {
  const [showDetails, setShowDetails] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleToggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const handleDelete = () => {
    onDelete(report.id)
  }

  return (
    <div className="report-card">
      <div className="card-header">
        <div className="reporter-info">
          <div className="reporter-avatar">{report.nome.charAt(0).toUpperCase()}</div>
          <div className="reporter-details">
            <h3>{report.nome}</h3>
            <p className="report-date">{formatDate(report.dataRegistro)}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="action-btn details-btn" onClick={handleToggleDetails} title="Ver detalhes">
            {showDetails ? <HiEyeOff /> : <HiEye />}
          </button>
          <button className="action-btn delete-btn" onClick={handleDelete} title="Excluir report">
            <HiTrash />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="location-info">
          <div className="info-item">
            <span className="info-icon">
              <HiLocationMarker />
            </span>
            <span className="info-text">{report.endereco}</span>
          </div>
          <div className="info-item">
            <span className="info-icon">
              <HiPhone />
            </span>
            <span className="info-text">{report.telefone}</span>
          </div>
        </div>

        {report.srcImage && (
          <div className="report-image">
            <img src={report.srcImage || "/placeholder.svg"} alt="Imagem do report" />
          </div>
        )}

        {showDetails && (
          <div className="report-details">
            <div className="detail-section">
              <h4>Ponto de Referência:</h4>
              <p>{report.textoReferencias}</p>
            </div>
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="report-status">
          <span className="status-badge active">Ativo</span>
        </div>
        <div className="report-id">ID: {report.id}</div>
      </div>
    </div>
  )
}

export default ReportCard
