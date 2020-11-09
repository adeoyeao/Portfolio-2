import TagCloud from "../public/scripts/cloud"
import { useState, useEffect } from "react"

const TagSphere = (props) => {
      const [ innerWidth, setInnerWidth ] = useState()
      const tagWidth = innerWidth < 700 ? 120 : innerWidth < 1200 ? 150 : 200

      const handleResize = () => { 
            setInnerWidth(window.innerWidth)
      }

      const myTags = []
      props.skills.forEach(obj => myTags.push(obj.skill))

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
      }, [innerWidth, props.skills])

      return (
            <div className="tagsphere" />
      )
}

export default TagSphere