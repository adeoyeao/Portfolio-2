import styles from "../styles/components/navbar.module.scss"
import { useRouter } from "next/router"
import Logo from './Logo'

const Navbar = () => {
      const router = useRouter()

      const handleClick = (href) => {
            router.push(href)
      }

      return (
            <nav className={styles.navbar}>
                  <div onClick = {() => handleClick("/")}>
                        <Logo />
                  </div>
                  <span onClick = {() => handleClick("/about")}>
                        About
                  </span>
                  <span onClick = {() => handleClick("/services")}>
                        Services
                  </span>
                  <span onClick = {() => handleClick("/projects")} >
                        Projects
                  </span>
                  <span onClick = {() => handleClick("/contact")}>
                        Get in Touch
                  </span>
            </nav>
      )
}

export default Navbar

