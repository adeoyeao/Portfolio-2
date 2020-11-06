import App from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store"
import Transition from "../components/Transition"

import styles from "../styles/settings/global.scss"

const MyApp = ({ Component, pageProps }) => {
      return (
      <Provider store={store}>
            <Transition />
            <Component {...pageProps}/>
      </Provider>
      )
}

export default MyApp