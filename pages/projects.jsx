import { useState, useEffect } from "react"
import Head from "next/head"

import Header from "../layouts/Header"
import ProjectsLayout from "../layouts/Projects"

const Projects = () => {
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
                  <Head>
                        <title>Alfred Adeoye</title>
                        <link rel="icon" type="image/svg" href="/icons/favicon.svg" />
                  </Head>
                  <Header />
                  <ProjectsLayout />
            </main>
      )
}

export default Projects