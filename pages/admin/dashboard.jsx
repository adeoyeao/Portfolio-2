import DashboardLayout from "../../layouts/Dashboard"
import { useState, useEffect } from "react"

const Dashboard = () => {
      const [ viewHeight, setViewHeight ] = useState()

      const handleResize = () => setViewHeight(window.innerHeight)

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return (() => window.removeEventListener("resize", handleResize))
      }, [])

      const mainStyle = {
            height: `${viewHeight}px`
      }
      
      return (
            <main style={mainStyle}>
                  <DashboardLayout />
            </main>
      )
}

export default Dashboard