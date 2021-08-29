const express = require('express');
const router = express.Router();
bodyParser = require('body-parser').json();
const mongoose = require('mongoose');

// if( !mongoose.Types.ObjectId.isValid(id) ) return false;
const authController = require('../controllers/auth');
const CRUDController = require('../controllers/crud');

const isAuth = require('../middleware/auth');
const isAdmin = require('../middleware/admin');

router.get('/me', [isAuth, isAdmin], authController.me);

router.get('/crud/', [isAuth], CRUDController.getPost(), (req, res) => {
    res.json(res.paginatedResults);
});
router.post('/crud/', [isAuth, isAdmin], CRUDController.addPost);
router.patch('/crud/:id', [isAuth, isAdmin], CRUDController.updatePost);
router.delete('/crud/:id', [isAuth, isAdmin], CRUDController.deletePost);

router.get('/:userId',  authController.userId);


router.post('/signup', authController.signup);


router.post('/login',bodyParser, authController.login);



module.exports = router; 