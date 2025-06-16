"use client"

import Dashboard from "../../components/dashboard/dashboard"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

export default function DashboardPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Dashboard /></div>
      <div><Footer /></div>
    </div>
  )
}
