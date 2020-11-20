import { useState, useEffect } from "react"

import Header from "../layouts/Header"
import ContactLayout from "../layouts/Contact"

const Contact = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      const mainStyle = {
            minHeight: viewHeight
      }

      return (
            <main style={mainStyle}>
                  <ContactLayout />
            </main>
      )
}

export default Contact