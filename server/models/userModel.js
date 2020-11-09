const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema({
      username: {
            type: String,
            required: true,
            unique: true
      }
})

module.exports = mongoose.model("user", UserSchema.plugin(passportLocalMongoose))