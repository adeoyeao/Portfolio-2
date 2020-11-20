import { useState, useEffect } from "react"
import Header from "../layouts/Header"
import SkillsLayout from "../layouts/Skills"
import useSWR from "swr"

const Skills = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)
      const [ skills, setSkills ] = useState([])

      const fetcher = (...args) => 
            fetch(...args)
            .then(res => res.json())
            .then(data => {
                  setSkills(data)
                  console.log(data)
            })

      const getStaticData = () => {
            const { data, err } = useSWR("/skilldata", fetcher)
      }

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      getStaticData()

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      })


      const mainStyle = {
            minHeight: viewHeight
      }

      return (
            <main style={mainStyle}>
                  <SkillsLayout skills={skills}/>
            </main>
      )
}

export default Skills