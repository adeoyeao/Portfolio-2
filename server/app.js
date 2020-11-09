<<<<<<< HEAD
const express = require("express")
const next = require("next")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== "production"

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const db = mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
})
.then(() => console.log("Successfully connected to MongoDB database"))
.catch(err => console.error(err))

nextApp.prepare()
.then(() => {
      const app = express()

      const restrictAccess = (req, res, next) => {
            !req.isAuthenticated() && res.redirect("/admin")
            next()
      } 

      const allowAccess = (req, res, next) => {
            req.isAuthenticated() && res.redirect("/admin/dashboard")
            next()
      }

      app.use(require("./routes/authentication"))
      app.use(require("./routes/cms"))

      app.use("/admin/dashboard", restrictAccess)
      app.use("/admin", allowAccess)

      app.get("*", (req, res) => {
            return handle(req, res)
      })

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
=======
const express = require("express")
const next = require("next")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== "production"

const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const db = mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
})
.then(() => console.log("Successfully connected to MongoDB database"))
.catch(err => console.error(err))

nextApp.prepare()
.then(() => {
      const app = express()

      const restrictAccess = (req, res, next) => {
            !req.isAuthenticated() && res.redirect("/admin")
            next()
      } 

      const allowAccess = (req, res, next) => {
            req.isAuthenticated() && res.redirect("/admin/dashboard")
            next()
      }

      app.use(require("./routes/authentication"))
      app.use(require("./routes/cms"))

      app.use("/admin/dashboard", restrictAccess)
      app.use("/admin", allowAccess)

      app.get("*", (req, res) => {
            return handle(req, res)
      })

      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
})