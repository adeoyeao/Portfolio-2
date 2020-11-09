<<<<<<< HEAD
const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema({
      username: {
            type: String,
            required: true,
            unique: true
      }
})

=======
const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = mongoose.Schema({
      username: {
            type: String,
            required: true,
            unique: true
      }
})

>>>>>>> ae3b55c0fda5c438f46c6b4cebd6008143645b37
module.exports = mongoose.model("user", UserSchema.plugin(passportLocalMongoose))