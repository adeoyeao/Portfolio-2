import styles from "../styles/components/folder.module.scss"

import AppsIcon from '@material-ui/icons/Apps';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import TimelineIcon from '@material-ui/icons/Timeline';

const Folder = (props) => {
      const iconStyle = {
            fontSize: 32,
            margin: "0 auto",
            marginBottom: "1rem",
            color: "#E7EBC5"
      }

      const folderStyle = props.type === "application" ?
      { background: "linear-gradient(90deg, #02aab0, #00cdac)" } :
      props.type === "website" ? 
      { background: "linear-gradient(90deg, #36d1dc, #5b86e5" } :
      { background: "linear-gradient(90deg, #4568dc, #b06ab3" }

      return (
            <div 
            className={styles.folder}
            style={folderStyle}>
                  { props.type === "application" ? 
                  <AppsIcon style={iconStyle} /> :
                  props.type === "website" ? 
                  <DesktopMacIcon style={iconStyle} /> :
                  <TimelineIcon style={iconStyle} /> }
                  { props.type === "application" ? 
                  <p>Applications</p> :
                  props.type === "website" ?
                  <p>Websites</p> :
                  <p>Dashboards</p> }            
            </div>
      )
}

export default Folder