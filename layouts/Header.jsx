import styles from "../styles/layouts/header.module.scss"
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Socials from "../components/Socials"

const Header = () => {
      return (
            <header className={styles.header}>
                  <Logo />
                  <Navbar /> 
                  <Socials />
            </header>
      )
}

export default Header