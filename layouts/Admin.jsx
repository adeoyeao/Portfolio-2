import { useState } from "react"
import styles from "../styles/layouts/admin.module.scss"
import LoginForm from "../components/LoginForm"

const AdminLayout = () => {
      return (
            <section className={styles.admin}>
                  <LoginForm />
            </section>
      )
}

export default AdminLayout