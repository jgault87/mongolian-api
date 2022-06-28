const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 255,
     
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
			default: dayjs(),
			get: (date) => dayjs(date).format('MMM Do, YYYY [at] hh:mm a')
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
