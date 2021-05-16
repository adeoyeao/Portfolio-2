import { useRouter } from "next/router"
import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      const router = useRouter()

      const handleClick = (href) => {
            router.push(href)
      }

      return (
            <button
            className={styles.button}
            onClick={() => handleClick(props.route)}>
                  {props.name}
            </button>
      )
}

export default Button