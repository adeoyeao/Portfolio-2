import Copy from "../components/Copy"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"

import { useSelector, useDispatch } from "react-redux"
import { pageEnter, pageExit } from "../redux/actions"
import { useEffect } from "react"

const IndexLayout = () => {
      const dispatch = useDispatch()
      
      const shrink = useSelector(state => state.transition.shrink)
      const shrinkStyle = shrink ? { transform: "scale(0.75, 0.75)" } : { transform: "unset" }

      useEffect(() => { 
            setTimeout(() => dispatch(pageEnter()), 1500)
      }, [])

      return (
            <section style={shrinkStyle}>
                  <div>
                  <Paragraph 
                  text="Hi, I'm" />
                  <Heading
                  type="primary"
                  head="Alfred Adeoye." />
                  <Copy 
                  type="secondary"
                  head="I build web apps."
                  text="I'm a web developer, who works with professional services firms to improve their digitial offerings."/>
                  </div>
            </section>
      )
}

export default IndexLayout