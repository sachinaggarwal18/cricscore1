const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


// Signup route
router.post(
    '/signup',
    [
        body('email')
            .trim()
            .isEmail().withMessage('Invalid email format.')
            .isLength({ min: 13 }).withMessage('Email must be at least 13 characters long.'),
        body('password')
            .trim()
            .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/)
            .withMessage('Password must include uppercase, lowercase, number, and special character.'),
        body('age')
            .trim()
            .isInt({ min: 1 }).withMessage('Age must be a positive number.'),
        body('phoneNumber')
            .trim()
            .isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10 and 15 characters long.')
            .isNumeric().withMessage('Phone number must contain only numbers.'),
        body('username')
            .trim()
            .isLength({ min: 4 }).withMessage('Username must be at least 4 characters long.')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid data'
                });
            }

            const { email, username, password, age, phoneNumber } = req.body;

            const existingUser = await userModel.findOne({
                $or: [{ email }, { username }, { phoneNumber }]
            });

            if (existingUser) {
                return res.status(400).json({
                    message: 'Email, username, or phone number already in use'
                });
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const newUser = await userModel.create({
                email,
                username,
                password: hashPassword,
                age,
                phoneNumber
            });

            res.status(201).json({
                message: 'User registered successfully',
                userId: newUser._id
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
);


// Login route
router.post('/login',
    
    body('username').trim().isLength({min: 4}),
    body('password').trim().isLength({min: 5}),
    async (req,res) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
             errors: errors.array(),
             message: 'Invalid data'
            })
         }

         const {username, password} = req.body;

         const user = await userModel.findOne({
            username: username
         })

         if(!user){
            return res.status(400).json({
                message: 'Username or password is incorrect'
            })
         }

         const isMatch = await bcrypt.compare(password, user.password);
          
         if(!isMatch){
            return res.status(400).json({
                message: 'Username or password is incorrect'
            })
         }

         //  jsonWebToken
         const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
         },
         process.env.JWT_SECRET)

         res.cookie('token', token)

         res.send('logged in') 
        
        }
)

module.exports = router;
