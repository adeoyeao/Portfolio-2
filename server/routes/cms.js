<<<<<<< HEAD
const express = require("express")
const mongoose = require("mongoose")
const skillModel = require("../models/skillModel")
const projectModel = require("../models/projectModel")

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post("/skill", (req, res) => {
      const skill = req.body.skill

      const newSkill = new skillModel({ skill: skill })

      newSkill.save()
      .then(() => console.log("Successfully saved new skill."))
      .catch(err => console.error(err))

      res.json({ message: `${skill} Added.`})
})

router.post("/project", (req, res) => {
      const project = req.body.project
      const category = req.body.category
      const description = req.body.description
      const technologies = [
            req.body.technology1,
            req.body.technology2,
            req.body.technology3
      ]
      const code = req.body.code
      const website = req.body.website

      const newProject = new projectModel({
            project: project,
            category: category,
            description: description,
            technology: technologies,
            code: code,
            website: website
      })

      newProject.save()
      .then(() => console.log("Successfully saved new project"))
      .catch(err => console.error(err))

      res.json({ message: `${project} Added.`})
})

=======
const express = require("express")
const mongoose = require("mongoose")
const skillModel = require("../models/skillModel")
const projectModel = require("../models/projectModel")

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post("/skill", (req, res) => {
      const skill = req.body.skill

      const newSkill = new skillModel({ skill: skill })

      newSkill.save()
      .then(() => console.log("Successfully saved new skill."))
      .catch(err => console.error(err))

      res.json({ message: `${skill} Added.`})
})

router.post("/project", (req, res) => {
      const project = req.body.project
      const category = req.body.category
      const description = req.body.description
      const technologies = [
            req.body.technology1,
            req.body.technology2,
            req.body.technology3
      ]
      const code = req.body.code
      const website = req.body.website

      const newProject = new projectModel({
            project: project,
            category: category,
            description: description,
            technology: technologies,
            code: code,
            website: website
      })

      newProject.save()
      .then(() => console.log("Successfully saved new project"))
      .catch(err => console.error(err))

      res.json({ message: `${project} Added.`})
})

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
module.exports = router