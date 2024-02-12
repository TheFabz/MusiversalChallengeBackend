const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageURL: String,
    services: [String],
});

const User = mongoose.model('User', userSchema);

User.createNewUser = async function(userData) {
    try {
        const newUser = await this.create(userData);
        return newUser;
    } catch (error) {
        throw error;
    }
};

module.exports = User;
