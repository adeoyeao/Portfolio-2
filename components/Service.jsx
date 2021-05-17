import styles from "../styles/components/service.module.scss"
import Heading from './Heading'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import HttpIcon from '@material-ui/icons/Http';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';

const Service = (props) => {
    const iconStyle = {
        color: '#F7FBFF',
        fontSize: 32
    }

    const icons = {
        design: <MobileScreenShareIcon style={iconStyle} />,
        development: <HttpIcon style={iconStyle}/>,
        optimisation: <SearchIcon style={iconStyle}/>,
        apps: <AppsIcon style={iconStyle}/>
    }

    return (
        <div className={styles.service}>
            <div className={styles.serviceIcon}>
                { icons[props.service] }
            </div>
            <Heading
            type='tertiary'
            head={props.head}
            />
        </div>
    )
}

export default Service