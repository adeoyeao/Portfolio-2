const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const User = require("../models/userModel")

const router = express.Router()

router.use(session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: true,
      cookie: ({maxAge: 604800000})
}))

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.use(passport.initialize())
router.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
            done(err, user)
      })
})

router.post("/login", (req, res) => {
      const user = new User({
            username: req.body.username,
            password: req.body.password
      })

      req.login(user, err => {
            err ? (console.error(err)) :
            passport.authenticate("local")(req, res, () => {
                  res.json({ message: "Welcome Alfred" })
            })
      })
})

// To be deleted
router.post("/register", (req, res) => {
      User.register({username: "adeoyeao"}, "Ctbear.2010")
      res.end()
}) 

module.exports = router


