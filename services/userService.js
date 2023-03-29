const { validationResult } = require('express-validator');
const userController = require('../controllers/userController');

exports.create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    await userController.create(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};

exports.readAll = async (req, res) => {
  try {
    await userController.readAll(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};

exports.readOne = async (req, res) => {
  try {
    await userController.readOne(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};

exports.update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    await userController.update(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};

exports.patch = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    await userController.update(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};







exports.delete = async (req, res) => {
  try {
    await userController.delete(req, res);
  } catch (error) {
    console.log(error);
    res.status(400).send('An error occurred');
  }
};
