import Copy from "../components/Copy"
import Button from "../components/Button"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"

import { useEffect } from "react"
import styled from 'styled-components'
import styles from "../styles/layouts/services.module.scss"

const ServicesLayout = () => {
      const Service = styled.div`
            display: flex;
            flex-direction: column;
            grid-gap: 2rem;
            border-radius: 1rem;
            padding: 2rem;
            background: #F7FBFF;
            box-shadow: 0 0px 8px 4px rgba(0, 0, 0, 0.05);
      `

      const servicesList = [
            {
                  name: 'Responsive Design',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                  name: 'Web Development',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                  name: 'SEO Optimisation',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                  name: 'eCommerce Development',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
      ]

      return (
            <section 
            className={styles.services}>
                        <Copy 
                        type="primary"
                        head="Services"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                        <Button 
                        route="/projects"
                        name="View More Projects"/>
                        <div className={styles.services_list}>
                              {
                                    servicesList.map(service => (
                                          <Service>
                                                <Heading
                                                type='tertiary'
                                                head={service.name} />
                                                <Paragraph 
                                                text={service.text}
                                                />
                                          </Service>
                                    ))
                              }
                        </div>
            </section>
      )
}

export default ServicesLayout