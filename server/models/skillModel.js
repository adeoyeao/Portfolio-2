const mongoose = require("mongoose")

const SkillSchema = mongoose.Schema({
      skill: {
            type: String,
            required: true,
            unique: true
      }
})

module.exports = mongoose.model("skill", SkillSchema)