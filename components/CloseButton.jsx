import styles from "../styles/components/closebutton.module.scss"
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = (props) => {
      return (
            <div className={styles.closebutton} onClick={() => props.handleClick()}> 
                  <CloseIcon style={{color: "#06001C"}} />
            </div>
      )
}

export default CloseButton