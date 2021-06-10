import Navbar from "../components/Navbar"
import Head from "next/head"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useRouter } from 'next/router' 
import styled from 'styled-components'

const Header = ({children}) => {
      const router = useRouter()
      const date = new Date()
      const year = date.getFullYear()

      const iconStyle = {
            fontSize: 24,
            color: "#F7FBFF"
      }

      const Footer = styled.footer`
            background: #202125;
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            grid-gap: 1rem;
            
            p {
                  color: #F7FBFF !important;
                  width: 100% !important;
                  text-align: center;
            }

            div {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  grid-gap: 1rem;
            }
      `

      return (
            <>
                  <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Web Developer Portfolio" />
                        <meta name="keywords" content="Alfred Adeoye, Web Developer, Portfolio, React, JavaScript, Front End Development" />
                        <meta name="author" content="Alfred Adeoye" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Alfred Adeoye</title>
                        <link rel="icon" type="image/svg" href="/icons/favicon.svg" />
                  </Head>
                  <Navbar />

            { children }
            <Footer>
                  <p>Alfred Adeoye Web Design</p>
                  <div> 
                        <a href="https://github.com/adeoyeao/" target="_blank" >
                              <GitHubIcon style={{fontSize: 24,
            color: "#F7FBFF"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/alfred-adeoye-37509b81" target="_blank" >
                              <LinkedInIcon style={{fontSize: 32,
            color: "#F7FBFF"}}/>
                        </a>
                  </div>
                  <p>&#169; {year}</p>
            </Footer>
            </>
      )
}

export default Header