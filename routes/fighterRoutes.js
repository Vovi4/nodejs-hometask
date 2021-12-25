const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', function(req, res) {
    
    const fighters = FighterService.getAll();

    if (!fighters) {
        res.status(400).json({
            error: true,
            message: 'Fighters not found'
        })
    }
    
    res.send(fighters);
    
  }, responseMiddleware);

  router.get('/:id', function(req, res) {

    const id = req.params.id;
    const fighterSearch = FighterService.search(id);

    if (!fighterSearch) {
        res.status(400).json({
            error: true,
            message: 'Fighter not found'
        })
    }
    
    res.send(fighterSearch);

  }, responseMiddleware);

  router.post('/', createFighterValid, function(req, res) {

    const fighterData = req.body;
    const fighterCreate = FighterService.create(fighterData);

    if (!fighterCreate) {
        res.status(400).json({
            error: true,
            message: 'Error, fighter not created'
        })
    }
    
    res.send(fighterCreate);

  }, responseMiddleware);
  
  router.put('/:id', updateFighterValid, function(req, res) {

    const id = req.params.id;
    const updateData = req.body
    const fighterUpdate = FighterService.update(id, updateData);

    if (!fighterUpdate) {
        res.status(400).json({
            error: true,
            message: 'Error fighter is not updated'
        })
    }
    
    res.send(fighterUpdate);

  }, responseMiddleware);
  
  router.delete('/:id', function(req, res) {

    const id = req.params.id;
    const fighterDelete = FighterService.delete(id);

    if (!fighterDelete) {
        res.status(400).json({
            error: true,
            message: 'Error fighter is not deleted'
        })
    }
    
    res.send(fighterDelete);

  }, responseMiddleware);



module.exports = router;