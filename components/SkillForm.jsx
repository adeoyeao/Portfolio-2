import Input from "./Input"
import SubmitButton from "./SubmitButton"
import styles from "../styles/components/form.module.scss"
import { useState } from "react"

const SkillForm = (props) => {
      const [ input, setInput ] = useState("")

      const handleChange = (e) => {
            setInput(e.target.value)
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            if(input !== "") {
                  fetch("/skill", {
                        method: "POST",
                        headers: {
                              "content-type": "application/json"
                        },
                        body: JSON.stringify({ skill: input })
                  })
                  .then(res => res.json())
                  .then(data => { 
                        console.log(data.message)
                        props.close()
                        setInput("")
                  })
                  .catch(err => console.error(err))
            } 
      }

      return (
            <form className={styles.form} onSubmit={handleSubmit}>
                  <Input 
                  type="text"
                  name="skill"
                  placeholder="Enter Skill"
                  autoComplete="off"
                  handleChange={handleChange}
                  value={input}
                  />
                  <SubmitButton />
            </form>
      )
}

export default SkillForm