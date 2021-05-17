import Copy from "../components/Copy"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"

import { useEffect } from "react"


import styles from "../styles/layouts/about.module.scss"

const ServicesLayout = () => {

      return (
            <section 
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

export default ServicesLayout