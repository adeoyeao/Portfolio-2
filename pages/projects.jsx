import { useState, useEffect } from "react"
import useSWR from "swr"
import Header from "../layouts/Header"
import ProjectsLayout from "../layouts/Projects"

const Projects = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)
      const [ projects , setProjects ] = useState([])

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      const fetcher = (...args) => 
            fetch(...args)
            .then(res => res.json())
            .then(data => {
                  setProjects(data.reverse())
                  console.log(data)
            })

      const getStaticData = () => {
            const { data, err } = useSWR("/projectdata", fetcher)
      }

      getStaticData()

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