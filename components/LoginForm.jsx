import Input from "./Input"
import SubmitButton from "./SubmitButton"
import { useState } from "react"
import { useRouter } from "next/router"
import styles from "../styles/components/form.module.scss"

const LoginForm = () => {
      const router = useRouter()

      const [ status, setStatus ] = useState("Login")
      const [ input, setInput ] = useState({
            username: "",
            password: ""
      })

      const handleChange = (e) => {
            const {name, value} = e.target
            setInput(prev => ({
                  ...prev,
                  [name]: value
            }))
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            fetch("/login", {
                  method: "POST",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify({ username: input.username, password: input.password })
            })
            .then(res => res.json())
            .then(data => { 
                  setStatus(data.message)
                  console.log(data.message)
                  data.message == "Welcome Alfred" && setTimeout(() => router.push("/admin/dashboard"), 500)
            })
            .catch(err => setStatus(`Login Failed`))
      }

      return (
            <form 
            onSubmit={handleSubmit}
            className={styles.form}>
                  <h1>{status}</h1>
                  <Input 
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={input.username}
                  handleChange={handleChange}/>
                  <Input 
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={input.password}
                  handleChange={handleChange}/>
                  <SubmitButton />
            </form>
      )
}

export default LoginForm