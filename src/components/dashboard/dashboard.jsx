"use client"

import { useState, useEffect } from "react"
import { listarReports } from "../../assets/utils/localStorage"
import DashboardHeader from "./dashboard-header"
import DashboardStats from "./dashboard-stats"
import ReportCard from "./report-card"
import "./dashboard.css"

function Dashboard() {
  const [reports, setReports] = useState([])
  const [filteredReports, setFilteredReports] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadReports()
  }, [])

  useEffect(() => {
    filterReports()
  }, [reports, searchTerm, filterStatus])

  const loadReports = () => {
    try {
      const data = listarReports()
      setReports(data)
      setLoading(false)
    } catch (error) {
      console.error("Erro ao carregar reports:", error)
      setLoading(false)
    }
  }

  const filterReports = () => {
    let filtered = reports

    if (searchTerm) {
      filtered = filtered.filter(
        (report) =>
          report.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.textoReferencias.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
    if (filterStatus !== "all") {
      filtered = filtered.filter((report) => report.status === filterStatus)
    }

    setFilteredReports(filtered)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleFilter = (status) => {
    setFilterStatus(status)
  }

  const handleDeleteReport = (reportId) => {
    if (window.confirm("Tem certeza que deseja excluir este report?")) {
      try {
        const storage = JSON.parse(localStorage.getItem("registroReports")) || {}
        delete storage[`report->${reportId}`]
        localStorage.setItem("registroReports", JSON.stringify(storage))
        loadReports()
      } catch (error) {
        console.error("Erro ao excluir report:", error)
      }
    }
  }

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <DashboardHeader onSearch={handleSearch} onFilter={handleFilter} />

      <DashboardStats reports={reports} />

      <div className="dashboard-content">
        <div className="reports-section">
          <div className="section-header">
            <h2>Reports Registrados</h2>
            <span className="reports-count">{filteredReports.length} reports encontrados</span>
          </div>

          {filteredReports.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📋</div>
              <h3>Nenhum report encontrado</h3>
              <p>
                {searchTerm || filterStatus !== "all"
                  ? "Tente ajustar os filtros de busca"
                  : "Ainda não há reports cadastrados no sistema"}
              </p>
            </div>
          ) : (
            <div className="reports-grid">
              {filteredReports.map((report) => (
                <ReportCard key={report.id} report={report} onDelete={handleDeleteReport} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
