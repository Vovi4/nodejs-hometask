const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    getAllUsers() {
        const users = UserRepository.getAll();
        if(!users) {
            throw new Error("Users not found!");
        }
        return item;
    }
    
    getOne(search) {
        const user = UserRepository.getOne(search);
        if(!user) {
            throw new Error("User not found!");
        }
        return item;
    }
    
    create(data) {
        const user = UserRepository.create(data);
        if(!user) {
            throw new Error("User not created!");
        }
        return item;
    }
    
    update(id, dataToUpdate) {
        const user = UserRepository.update(id, dataToUpdate);
        if(!user) {
            throw new Error("User not updated!");
        }
        return item;
    }

    delete(id) {
        const user = UserRepository.update(id);
        if(!user) {
            throw new Error("User not deleted!");
        }
        return item;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();