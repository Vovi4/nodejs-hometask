const { user } = require('../models/user');

const emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const phoneCheck = /^\+?([3][8][0])\)?([0-9]{9})$/;

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation

    try {

        const {firstName, lastName, email, phoneNumber, password } = req.body;

        if (!req.body) {
            throw new Error('All fields must be filled in !')
        }

        if (!firstName) {
            throw new Error('Please entered your First Name')
        }

        if (!lastName) {
            throw new Error('Please entered your Last Name')
        }

        if (!email || !email.includes('@gmail.com') || !emailCheck.test(email)) {
            throw new Error('Incorect entered email')
        }

        if (!phoneNumber || !phoneCheck.test(phoneNumber)) {
            throw new Error('Incorect entered phone number')
        }

        if (!password || !password.langth >= 3 || typeof password !== "srting") {
            throw new Error('Password must be only string and longer then 3 symbols')
        }       

        next();

    } catch (err) {
        res.status(400)
        .json({error: true, message: err.message});
    }    
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    try {

        const {id}  = req.params;
        const usersData = Object.keys(reg.body);


        if (!req.body) {
            throw new Error('Data can not be empty !')
        }
        for (let key in reg.body) {
            if (key === 'email' && (!req.body[key].includes('@gmail.com') || !emailCheck.test(req.body[key]))) {
                throw new Error('User with this email is alredy exist')
                break;
            }

            if (key === 'phoneNumber' && !phoneCheck.test(req.body[key])) {
                throw new Error('User with this phone number is alredy exist')
                break;
            }
        }

        next();

    } catch (err) {
        res.status(400)
        .json({error: true, message: err.message});
    }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;