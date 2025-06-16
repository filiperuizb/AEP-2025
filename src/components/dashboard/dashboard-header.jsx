"use client"

import { useState } from "react"
import { HiSearch } from "react-icons/hi"
import "./dashboard-header.css"

function DashboardHeader({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleFilterChange = (e) => {
    onFilter(e.target.value)
  }

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-title">
          <h1>Dashboard de Reports</h1>
          <p>Gerencie e visualize todos os reports ambientais</p>
        </div>

        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar por nome, endereço ou referência..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <div className="search-icon">
              <HiSearch />
            </div>
          </div>

          <select className="filter-select" onChange={handleFilterChange}>
            <option value="all">Todos os Reports</option>
            <option value="recent">Recentes</option>
            <option value="older">Mais Antigos</option>
          </select>

          <button className="new-report-btn" onClick={() => (window.location.href = "/form")}>
            + Novo Report
          </button>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
