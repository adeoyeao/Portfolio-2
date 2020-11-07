import styles from "../styles/layouts/header.module.scss"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Socials from "../components/Socials"
import Head from "next/head"

const Header = ({children}) => {
      return (
            <div>
                  <Head>
                        <meta charSet="UTF-8" />
                        <meta name="description" content="Web Developer Portfolio" />
                        <meta name="keywords" content="Alfred Adeoye, Web Developer, Portfolio, React, JavaScript, Front End Development" />
                        <meta name="author" content="Alfred Adeoye" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Alfred Adeoye</title>
                        <link rel="icon" type="image/svg" href="/icons/favicon.svg" />
                  </Head>
            <header className={styles.header}>
                  <Logo />
                  <Navbar /> 
                  <Socials />
            </header>
            { children }
            </div>
      )
}

export default Header