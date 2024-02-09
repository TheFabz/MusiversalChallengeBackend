const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://fabz:admin@cluster0.pe6mh.mongodb.net/musiversal?retryWrites=true&w=majority';


async function connect() {

    try {
        await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

async function close() {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
}

module.exports = { connect, close };