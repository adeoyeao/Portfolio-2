import { useState, useEffect } from "react"

import Header from "../layouts/Header"
import AboutLayout from "../layouts/About"

const About = () => {
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
                  <AboutLayout />
            </main>
      )
}

export default About