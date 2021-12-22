const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    getAllFighters() {
        const fighters = FighterRepository.getAll();
        if(!fighters) {
            throw new Error("Fighters not found!");
        }
        return fighters;
    }
    
    getOne(search) {
        const fighter = FighterRepository.getOne(search);
        if(!fighter) {
            throw new Error("Fighter not found!");
        }
        return fighter;
    }

    create(data) {
        const fighter = FighterRepository.create(data);
        if(!fighter) {
            throw new Error("Fighter not created!");
        }
        return fighter;
    }

    update(id, dataToUpdate) {
        const fighter = FighterRepository.update(id, dataToUpdate);
        if(!fighter) {
            throw new Error("Fighter not updated!");
        }
        return fighter;
    }
    
    delete(id) {
        const fighter = FighterRepository.delete(id);
        if(!fighter) {
            throw new Error("Fighter not deleted!");
        }
        return fighter;
    }




}

module.exports = new FighterService();