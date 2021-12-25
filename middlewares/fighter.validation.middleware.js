const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    
    try {

        const {id, name, health, power, defense} = reg.body; 

        if (!req.body) {
            throw new Error('Please added some information about fighter !')
        }

        for(let key in fighter) {               
            if (key === id) {
                throw new Error('Fighter with this params is alredy exist')                
            }
        }

        if (!name || typeof name !== "srting") {
            throw new Error('Please entered fighter Name')
        }
        
        if (health < 80  || health > 120) {
            throw new Error('Fighter health must be more than 80 and less then 120')
        }

        if (!power || (power < 1 || power > 100) || !Number.isInteger(power)) {
            throw new Error('Fighter power must be more than 1 and less then 100')
        }

        if (!defense || (defense < 1 || defense > 10) || !Number.isInteger(defense)) {
            throw new Error('Fighter defense must be more than 1 and less then 10')
        }        

    next();

    } catch (err) {
        res.status(400)
        .json({error: true, message: err.message});
    }    
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    
    try {

        if (!req.body) {
            throw new Error('All fields must be filled in !')
        }

        for(let key in reg.body) {               
            
            if (key === 'name' && typeof req.body[key] !== "srting") {
                throw new Error('Fighter with this name is alredy exist')                
            }

            if (key === 'health' && (req.body[key] < 80  || req.body[key] > 120)) {
                throw new Error('Fighter health must be more than 80 and less then 120')
            }
    
            if (key === 'power' && (req.body[key] < 1 || req.body[key] > 100) || !Number.isInteger(req.body[key])) {
                throw new Error('Fighter power must be more than 1 and less then 100')
            }
    
            if (key === 'defense' &&  (req.body[key] < 1 || req.body[key] > 10) || !Number.isInteger(req.body[key])) {
                throw new Error('Fighter defense must be more than 1 and less then 10')
            }       
        }

    next();

    } catch (err) {
        res.status(400)
        .json({error: true, message: err.message});
    }    
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;