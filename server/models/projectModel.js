<<<<<<< HEAD
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

=======
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

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
module.exports = mongoose.model("project", ProjectSchema)