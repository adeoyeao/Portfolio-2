import { useState, useEffect } from "react"
import { GetStaticProps } from "next"
import Header from "../layouts/Header"
import SkillsLayout from "../layouts/Skills"

const Skills = ({ skills }) => {
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
                  <SkillsLayout skills={skills}/>
            </main>
      )
}


export async function getStaticProps() {
      const res = await fetch("http://localhost:5000/skill")
      const skills = await res.json()

      return {
            props: {
                  skills,
            }
      }
}

export default Skills