import Copy from "../components/Copy"
import Service from '../components/Service'
import Button from "../components/Button"
import { useState, useEffect } from "react"
import AboutLayout from './About'
import styles from "../styles/layouts/index.module.scss"

const IndexLayout = () => {
      const [ viewHeight, setViewHeight ] = useState(`100vh`)

      const handleResize = () => {
            setViewHeight(`${window.innerHeight}px`)
      }

      useEffect(() => {
            handleResize()
            window.addEventListener("resize", handleResize)
            return () => {
                  window.removeEventListener("resize", handleResize)
            }
      }, [])

      const indexStyle = {
            minHeight: viewHeight
      }

      return (
            <>
            <section 
            style={indexStyle}
            className={styles.index}>
                  <div>
                  <Copy 
                  type="primary"
                  head="I help businesses stand out online."
                  text="I'm a freelance web developer based in London, who designs and builds websites for SMEs and self-employed professionals. "/>
                  <Button 
                  route="projects"
                  name="View Recent Projects"/>
                  </div>
            </section>
            <AboutLayout/>
            <section className={styles.services}>
                  <Service 
                  service='design'
                  head='Responsive Design'
                  />
                  <Service 
                  service='development'
                  head='Web Development'
                  />
                  <Service 
                  service='optimisation'
                  head='SEO Optimisation'
                  />
                  <Service 
                  service='apps'
                  head='eCommerce Development'
                  />
                  <Button 
                  route='services'
                  name='See How I Can Help'
                  />
            </section>
            </>
      )
}

export default IndexLayout