import Input from "./Input"
import SubmitButton from "./SubmitButton"
import styles from "../styles/components/form.module.scss"
import { useState } from "react"

const ProjectForm = (props) => {
      const [input, setInput ] = useState ({
            project: "",
            category: "",
            description: "",
            code: "",
            technology1: "",
            technology2: "",
            technology3: "",
            website: ""
      })

      const handleChange = (e) => {
            const { name, value } = e.target
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            if(input !== {
            project: "",
            category: "",
            description: "",
            code: "",
            technology1: "",
            technology2: "",
            technology3: "",
            website: ""
            }) {
                  fetch("/project", {
                        method: "POST",
                        headers: {
                              "content-type": "application/json"
                        },
                        body: JSON.stringify({ 
                              project: input.project,
                              category: input.category,
                              description: input.description,
                              technology1: input.technology1,
                              technology2: input.technology2,
                              technology3: input.technology3,
                              code: input.code,
                              website: input.website
                         })
                  })
                  .then(res => res.json())
                  .then(data => { 
                        console.log(data.message)
                        props.close()
                        setInput({
                              project: "",
                              category: "",
                              description: "",
                              code: "",
                              technology1: "",
                              technology2: "",
                              technology3: "",
                              website: ""
                        })
                  })
                  .catch(err => console.error(err))
            } 
      }

      return (
            <form className={styles.form} onSubmit={handleSubmit}>
                  <div>
                  <Input 
                  type="text"
                  name="project"
                  placeholder="Project Name"
                  value={input.project}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="category"
                  placeholder="Website / Application / Dashboard"
                  value={input.category}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={input.description}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="technology1"
                  placeholder="Technology"
                  value={input.technology1}
                  handleChange={handleChange}/>
                  </div>
                  <div>
                  <Input 
                  type="text"
                  name="technology2"
                  placeholder="Technology"
                  value={input.technology2}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="technology3"
                  placeholder="Technology"
                  value={input.technology3}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="code"
                  placeholder="GitHub URL"
                  value={input.code}
                  handleChange={handleChange}/>
                  <Input 
                  type="text"
                  name="website"
                  placeholder="Website URL"
                  value={input.website}
                  handleChange={handleChange}/>
                  </div>
                  <SubmitButton />
            </form>
      )
}

export default ProjectForm