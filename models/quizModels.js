const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  description: {
    type: String,
  },
  alternatives: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

Question = mongoose.model('question', questionSchema);

module.exports = Question;
