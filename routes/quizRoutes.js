const express = require('express');
const router = express.Router();
const {
  getAllQuiz,
  getOneQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require('../controller/quizController');

// get all quiz
router.get('/questions', getAllQuiz);

// get specific quiz
router.get('/questions/:id', getOneQuiz);

// create a quiz
router.post('/questions', createQuiz);

// update a quiz
router.put('/questions/:id', updateQuiz);

// delete a quiz
router.delete('/questions/:id', deleteQuiz);

module.exports = router;
