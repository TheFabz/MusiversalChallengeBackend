const db = require('./db');

// Handle server shutdown gracefully
async function handleServerShutdown(server) {
    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);

    async function gracefulShutdown() {
        console.log('Closing MongoDB connection...');
        await db.close();
        server.close(() => {
            console.log('Server closed. Exiting process...');
            process.exit(0);
        });
    }
}


module.exports = { handleServerShutdown };
