const { Schema, model } = require('mongoose');
const validate = require('mongoose-validator');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      trim:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate: [
            validate({
              validator: 'isEmail',
              message: 'Please enter a valid e-mail address'
            })
          ]
      },

      Thought: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],

      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],

    // reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
