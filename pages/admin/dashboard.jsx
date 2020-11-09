<<<<<<< HEAD
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

=======
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

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
export default Dashboard