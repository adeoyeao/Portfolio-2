<<<<<<< HEAD
import styles from "../styles/components/input.module.scss"

const Input = (props) => {
      return (
            <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.handleChange(e)}
            autoComplete="off"
            className={styles.input}/>
      )
}

=======
import styles from "../styles/components/input.module.scss"

const Input = (props) => {
      return (
            <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) => props.handleChange(e)}
            autoComplete="off"
            className={styles.input}/>
      )
}

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
export default Input