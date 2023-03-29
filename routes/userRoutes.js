const express = require('express');
const { body } = require('express-validator');
const userService = require('../services/userService');

const router = express.Router();

// Create user
router.post(
  '/',
  [
    body('name').trim().isLength({ min: 3 }).withMessage('Name should be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage('Password should be at least 6 characters long'),
  ],
  userService.create
);

// Read all users
router.get('/', userService.readAll);

// Read one user
router.get('/:id', userService.readOne);

// Update user
router.put(
  '/:id',
  [
    body('name').optional().trim().isLength({ min: 3 }).withMessage('Name should be at least 3 characters long'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('password')
      .optional()
      .trim()
      .isLength({ min: 6 })
      .withMessage('Password should be at least 6 characters long'),
  ],
  userService.update
);

// Patch user
router.patch('/:id', 
 [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name should be at least 3 characters long'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Invalid email'),
  body('password')
    .optional()
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password should be at least 6 characters long'),
],
userService.patch);


// Delete user
router.delete('/:id', userService.delete);

module.exports = router;
