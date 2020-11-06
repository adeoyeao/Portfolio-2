import Copy from "../components/Copy"
import Paragraph from "../components/Paragraph"
import Button from "../components/Button"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

import styles from "../styles/layouts/skills.module.scss"

const AboutLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      return (
            <section 
            style={shrinkStyle}
            className={styles.skills}>
                  <div>
                  <Copy 
                  type="primary"
                  head="Skills"
                  text="I utilise HTML, CSS (Flexbox and CSS Grid) and JavaScript (React) to create modern and minimalist user interfaces.  "/>
                  <br />
                  <Paragraph 
                  text="I am adept at developing robust backend functionality and use Node.JS (Express) for building servers and MongoDB for database management."/>
                  <Button 
                  route="/projects"
                  name="See What I Can Do"/>
                  </div>
                  <div />
            </section>
      )
}

export default AboutLayout