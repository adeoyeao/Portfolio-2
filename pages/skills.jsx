import { useState, useEffect } from "react"
import { GetServerSideProps } from "next"
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

export async function getServerSideProps() {
      const res = await fetch("https://alfred-adeoye.herokuapp.com/skill", {
            method: "POST",
            headers: {
                  "content-type": "application/json"
            },
            body: JSON.stringify({ message: "Testing"})
      })

      const skills = await res.json()

      return {
            props: {
                  skills,
            }
      }
}

export default Skills