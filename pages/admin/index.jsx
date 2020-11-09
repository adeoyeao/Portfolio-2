<<<<<<< HEAD
import AdminLayout from "../../layouts/Admin"
import { useState, useEffect } from "react"

const Admin = () => {
      const [ viewHeight, setViewHeight ] = useState()

      const handleResize = () => {
            setViewHeight(window.innerHeight)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      const mainStyle = {
            minHeight: `${viewHeight}px`
      }

      return (
            <main style={mainStyle}>
                  <AdminLayout />
            </main>
      )
}

=======
import AdminLayout from "../../layouts/Admin"
import { useState, useEffect } from "react"

const Admin = () => {
      const [ viewHeight, setViewHeight ] = useState()

      const handleResize = () => {
            setViewHeight(window.innerHeight)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      const mainStyle = {
            minHeight: `${viewHeight}px`
      }

      return (
            <main style={mainStyle}>
                  <AdminLayout />
            </main>
      )
}

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
export default Admin