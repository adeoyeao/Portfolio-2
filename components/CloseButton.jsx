<<<<<<< HEAD
import styles from "../styles/components/closebutton.module.scss"
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = (props) => {
      return (
            <div className={styles.closebutton} onClick={props.handleClick}> 
                  <CloseIcon style={{color: "#06001C"}} />
            </div>
      )
}

=======
import styles from "../styles/components/closebutton.module.scss"
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = (props) => {
      return (
            <div className={styles.closebutton} onClick={props.handleClick}> 
                  <CloseIcon style={{color: "#06001C"}} />
            </div>
      )
}

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
export default CloseButton