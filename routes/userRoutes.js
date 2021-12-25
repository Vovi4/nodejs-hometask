const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', function(req, res) {
    
    const users = UserService.getAll();

    if (!users) {
        res.status(400).json({
            error: true,
            message: 'Users not found'
        })
    }
    
    res.send(users);
    
  }, responseMiddleware);

  router.get('/:id', function(req, res) {

    const id = req.params.id;
    const userSearch = UserService.search(id);

    if (!userSearch) {
        res.status(400).json({
            error: true,
            message: 'User not found'
        })
    }
    
    res.send(userSearch);

  }, responseMiddleware);

  router.post('/', createUserValid, function(req, res) {

    const userData = req.body;
    const userCreate = UserService.create(userData);

    if (!userCreate) {
        res.status(400).json({
            error: true,
            message: 'Error, user not created'
        })
    }
    
    res.send(userCreate);

  }, responseMiddleware);
  
  router.put('/:id', updateUserValid, function(req, res) {

    const id = req.params.id;
    const updateData = req.body
    const userUpdate = UserService.update(id, updateData);

    if (!userUpdate) {
        res.status(400).json({
            error: true,
            message: 'Error user is not updated'
        })
    }
    
    res.send(userUpdate);

  }, responseMiddleware);
  
  router.delete('/:id', function(req, res) {

    const id = req.params.id;
    const userDelete = UserService.delete(id);

    if (!userDelete) {
        res.status(400).json({
            error: true,
            message: 'Error user is not deleted'
        })
    }
    
    res.send(userDelete);

  }, responseMiddleware);

module.exports = router;