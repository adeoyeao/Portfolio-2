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
                        About Me
                  </span>
                  <span onClick = {() => handleClick("/projects")} >
                        Projects
                  </span>
                  <span onClick = {() => handleClick("/contact")}>
                        Contact Me
                  </span>
            </nav>
      )
}

export default Navbar

