import Copy from "../components/Copy"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Job from "../components/Job"

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
                  <div className={styles.carousel}> 
                        <Job
                        company="Insight Capital"
                        job="Front End Developer"
                        years="2021~" />
                        <Job 
                        company="Freelance"
                        job="Web Developer"
                        years="2020~"/>
                        <Job 
                        company="Linklaters"
                        job="Project Manager"
                        years="2019-20"/>
                        <Job 
                        company="EY"
                        job="Project Manager"
                        years="2016-19"/>
                  </div>
            </section>
      )
}

export default AboutLayout