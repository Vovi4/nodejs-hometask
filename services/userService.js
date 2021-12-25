const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    getAll() {
        const users = UserRepository.getAll();
        if(!users) {
            throw new Error("Users not found!");
        }
        return users;
    }
    
    create(data) {
        const user = UserRepository.create(data);
        if(!user) {
            throw new Error("User not created!");
        }
        return user;
    }
    
    update(id, dataToUpdate) {
        const user = UserRepository.update(id, dataToUpdate);
        if(!user) {
            throw new Error("User not updated!");
        }
        return user;
    }

    delete(id) {
        const user = UserRepository.update(id);
        if(!user) {
            throw new Error("User not deleted!");
        }
        return user;
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