import Copy from "../components/Copy"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"


import styles from "../styles/layouts/about.module.scss"

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
            className={styles.about}>
                  <div>
                  <Copy 
                  type="primary"
                  head="About Me"
                  text="I’m a web developer (MERN Stack), based in London, who focuses on designing and developing responsive websites and applications that optimise the user experience."/>
                  <br />
                  <Paragraph 
                  text="Having previously worked as a digital project manager within the financial and legal sectors, I have experience solving the many problems faced by these industries."/>
                  <Button 
                  route="/projects"
                  name="View More Projects"/>
                  </div>
            </section>
      )
}

export default AboutLayout