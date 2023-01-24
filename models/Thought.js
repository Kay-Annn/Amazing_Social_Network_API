const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },

    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    }
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

)

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    username: [
      {
        type: String,
        required:true
      },
    ]
    ,
    reactions: [
      reactionSchema
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//create a virtual property "reactionsCount" that gets the amount of reactions per thoughts
thoughtSchema.virtual('reactionsCount').get(function () {
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

const handleError = (error) => console.error(error);

module.exports = Thought;
