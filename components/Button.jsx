import { useDispatch } from "react-redux"
import { pageExit } from "../redux/actions"
import { useRouter } from "next/router"
import styles from "../styles/components/button.module.scss"

const Button = (props) => {
      const router = useRouter()
      const dispatch=useDispatch()

      const handleClick = (href) => {
            dispatch(pageExit())
            setTimeout(() => router.push(href), 750)
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