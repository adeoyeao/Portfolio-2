import App from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store"
import Transition from "../components/Transition"
import Header from "../layouts/Header"

import styles from "../styles/settings/global.scss"

const MyApp = ({ Component, pageProps }) => {
      return (
      <Provider store={store}>
            <Transition />
            <Header>
                  <Component {...pageProps}/>
            </Header>
      </Provider>
      )
}

export default MyApp