import Copy from "../components/Copy"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

const ContactLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [])

      return (
            <section style={shrinkStyle}>
                  <div>
                  <Copy 
                  type="primary"
                  head="Contact"
                  text="Call me beep me how you gonna reach me."/>
                  </div>
            </section>
      )
}

export default ContactLayout