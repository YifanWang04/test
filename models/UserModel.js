const mongoose = require(`mongoose`)

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

let UserModel = mongoose.model(`users`, UserSchema)

// Expose model object
module.exports = UserModel