"use client"

import "./dashboard-stats.css"
import { HiChartBar, HiCalendar, HiLightningBolt, HiPhotograph } from "react-icons/hi"

function DashboardStats({ reports }) {
  const totalReports = reports.length
  const reportsThisMonth = reports.filter((report) => {
    const reportDate = new Date(report.dataRegistro)
    const currentDate = new Date()
    return reportDate.getMonth() === currentDate.getMonth() && reportDate.getFullYear() === currentDate.getFullYear()
  }).length

  const reportsThisWeek = reports.filter((report) => {
    const reportDate = new Date(report.dataRegistro)
    const currentDate = new Date()
    const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
    return reportDate >= weekAgo
  }).length

  const reportsWithImages = reports.filter((report) => report.srcImage).length

  return (
    <div className="dashboard-stats">
      <div className="stat-card total">
        <div className="stat-icon">
          <HiChartBar />
        </div>
        <div className="stat-content">
          <h3>{totalReports}</h3>
          <p>Total de Reports</p>
        </div>
      </div>

      <div className="stat-card monthly">
        <div className="stat-icon">
          <HiCalendar />
        </div>
        <div className="stat-content">
          <h3>{reportsThisMonth}</h3>
          <p>Este Mês</p>
        </div>
      </div>

      <div className="stat-card weekly">
        <div className="stat-icon">
          <HiLightningBolt />
        </div>
        <div className="stat-content">
          <h3>{reportsThisWeek}</h3>
          <p>Esta Semana</p>
        </div>
      </div>

      <div className="stat-card images">
        <div className="stat-icon">
          <HiPhotograph />
        </div>
        <div className="stat-content">
          <h3>{reportsWithImages}</h3>
          <p>Com Imagens</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardStats
