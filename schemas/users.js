const mongoose = require('mongoose');
const { string } = require('nunjucks/src/filters');

const { Schema } = mongoose;
const userSchema = new Schema({
  profileImg: {
    type: string,
  },
  nickname: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
  },
  password: {
    type: string,
    required: true
  },
});

module.exports = mongoose.model("Users", userSchema);