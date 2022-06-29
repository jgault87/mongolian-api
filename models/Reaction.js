const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
     
    },
    username: {
			type: String,
			required: true
		},
    // score: {
    //   type: Number,
    //   required: true,
    //   default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    // },
    createdAt: {
			type: Date,
      default: Date.now(),
		}
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
