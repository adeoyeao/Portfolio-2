import TagCloud from "../public/scripts/cloud"
import { useState, useEffect } from "react"

const TagSphere = () => {
      const [ innerWidth, setInnerWidth ] = useState()
      const tagWidth = innerWidth < 700 ? 120 : innerWidth < 1200 ? 150 : 200

      const myTags = ["HTML", "CSS", "JavaScript", "Adobe XD", "React", "Redux", "React Hooks", "SASS", "EJS", "Node.js", "npm", "Express.js", "Next.js", "MongoDB", "Git", "Agile PM", "REST", "APIs", "JSON", "SQL", "Linux"]

      const handleResize = () => { 
            setInnerWidth(window.innerWidth)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            const tagCloud = TagCloud(".tagsphere", myTags, {
                  radius: tagWidth,
            })
            return (() =>  {
                  window.removeEventListener("resize", handleResize)
                  tagCloud.destroy()
            })
      }, [innerWidth])

      return (
            <div className="tagsphere" />
      )
}

export default TagSphere