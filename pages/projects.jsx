import { useState, useEffect } from "react"
import { GetServerSideProps } from "next"
import Header from "../layouts/Header"
import ProjectsLayout from "../layouts/Projects"

const Projects = ({ projects }) => {
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
                  <ProjectsLayout projects={projects.reverse()}/>
            </main>
      )
}

export async function getServerSideProps() {
      const res = await fetch("https://alfred-adeoye.herokuapp.com/project", {
            method: "POST",
            headers: {
                  "content-type": "application/json"
            },
            body: JSON.stringify({ message: "Testing"})
      })

      const projects = await res.json()
      return {
            props: {
                  projects
            }
      }
}

export default Projects