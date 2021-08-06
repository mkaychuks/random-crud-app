const Question = require('../models/quizModels');

// get all quiz
const getAllQuiz = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json({ success: true, data: questions });
  } catch (error) {
    res.send(error.message);
  }
};

// get a specific quiz
const getOneQuiz = (req, res) => {};

// create a quiz
const createQuiz = (req, res) => {};

// update quiz
const updateQuiz = (req, res) => {};

// delete a quiz
const deleteQuiz = (req, res) => {};

module.exports = { getAllQuiz, getOneQuiz, createQuiz, updateQuiz, deleteQuiz };
