import Copy from "../components/Copy"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"
import HomeAnimation from "../components/HomeAnimation"
import Button from "../components/Button"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

import styles from "../styles/layouts/index.module.scss"

const IndexLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [shrink])

      return (
            <section 
            style={shrinkStyle}
            className={styles.index}>
                  <div>
                  <Paragraph 
                  text="Hi, I'm" />
                  <Heading
                  type="primary"
                  head="Alfred Adeoye." />
                  <Copy 
                  type="secondary"
                  head="I build web apps."
                  text="I'm a web developer, who works with professional services firms to improve their digitial offerings."/>
                  <Button 
                  route="projects"
                  name="View Recent Projects"/>
                  </div>
                  <div className={styles.heroimage} >
                  <HomeAnimation />
                  </div>
            </section>
      )
}

export default IndexLayout