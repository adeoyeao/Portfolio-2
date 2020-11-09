const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
      project: {
            type: String,
            unique: true,
            required: true,
      },
      category: {
            type: String,
            required: true,
            enum: ["Website", "Application", "Dashboard"]
      },
      description: {
            type: String,
            required: true,
      },
      technologies: {
            type: Array,
            required: true
      },
      code: {
            type: String,
            required: true
      },
      website: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model("project", ProjectSchema)