import Copy from "../components/Copy"
import Paragraph from "../components/Paragraph"
import Heading from "../components/Heading"

const IndexLayout = () => {
      return (
            <section>
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