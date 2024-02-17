const {handleServerShutdown} = require('./serverUtil');
const express = require('express');
const db = require('./db');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

db.connect()

app.use(cors());
app.use(bodyParser.json());

const usersRoutes = require('./routes/users');
const availabilityRoutes = require('./routes/availability');
const bookingRoutes = require('./routes/bookings')
const resetApp = require('./routes/reset')

app.use('/users', usersRoutes);
app.use('/availability', availabilityRoutes);
app.use('/booking', bookingRoutes);
app.use('/reset', resetApp);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

handleServerShutdown(server);