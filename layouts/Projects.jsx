import Copy from "../components/Copy"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

const ProjectsLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      return (
            <section style={shrinkStyle}>
                  <div>
                  <Copy 
                  type="primary"
                  head="Projects"
                  text="Here are my projects."/>
                  </div>
            </section>
      )
}

export default ProjectsLayout