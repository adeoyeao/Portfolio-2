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
      technology1: {
            type: String,
            reqired: true
      },
      technology2: {
            type: String,
            reqired: true
      },
      technology3: {
            type: String,
            reqired: true
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