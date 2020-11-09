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

export default Input