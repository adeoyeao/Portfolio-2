import Copy from "../components/Copy"
import Paragraph from "../components/Paragraph"
import Button from "../components/Button"
import TagSphere from "../components/TagSphere"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

import styles from "../styles/layouts/skills.module.scss"

const SkillsLayout = (props) => {
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
                  text="On the front end, I primarily use React with Redux to create modern and minimalist user interfaces."/>
                  <br />
                  <Paragraph 
                  text="I am adept at building React applications using Next.js with custom Express.js servers for, amongst other things, server side rendering, user authenticaiton and connecting to databases and external APIs."/>
                  <Button 
                  route="/projects"
                  name="See What I Can Do"/>
                  </div>
                  <div className={styles.tagcloud}>
                        <TagSphere skills={props.skills}/>
                  </div>
            </section>
      )
}

export default SkillsLayout