import Copy from "../components/Copy"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"

import { useEffect } from "react"

import styles from "../styles/layouts/about.module.scss"

const AboutLayout = () => {
      return (
            <section 
            className={styles.about}>
                  <Heading 
                  type='primary'
                  head='About Me'
                  />
                  <Paragraph 
                  text="I'm a freelance web developer based in London who primarily works with local businesses, SMEs and self-employed professionals to help them improve their digital offerings. When working with clients my goal is to optimise the user experience and maximise the brand impact."/>
            </section>
      )
}

export default AboutLayout