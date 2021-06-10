import { useState, useEffect } from "react"
import ProjectsLayout from "../../layouts/Projects"

const Projects = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)
      const [ projects , setProjects ] = useState([])

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
                  <ProjectsLayout projects={projects}/>
            </main>
      )
}

export default Projects