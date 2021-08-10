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
const getOneQuiz = async (req, res) => {
  try {
    const singleQuiz = await Question.findOne({ _id: req.params.id });
    res.status(200).json({ success: true, data: singleQuiz });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Quiz not found' });
  }
};

// create a quiz
const createQuiz = async (req, res) => {
  try {
    const { description, alternatives } = req.body;
    const newQuestion = await Question.create({ description, alternatives });
    res.status(201).json({ succcess: true, data: newQuestion });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// update quiz
const updateQuiz = async (req, res) => {
  try {
    const { description, alternatives } = req.body;
    const questionInDB = await Question.findOne({ _id: req.params.id });
    if (!questionInDB) {
      return res.status(404).json({ message: 'Question not found' });
    }
    questionInDB.description = description;
    questionInDB.alternatives = alternatives;

    await questionInDB.save();
    return res.status(200).json({ success: true, data: questionInDB });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// delete a quiz
const deleteQuiz = (req, res) => {};

module.exports = { getAllQuiz, getOneQuiz, createQuiz, updateQuiz, deleteQuiz };
