const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser
const db = require('./db');
const User = require('./models/User');
const AvailabilitySlot = require('./models/AvailabilitySlot');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
db.connect();

const usersRoutes = require('./routes/users');
const availabilityRoutes = require('./routes/availability');
const buildResponse = require("./responses/PrepareUserSlotsGivenDate");

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.use('/availability', availabilityRoutes);
//app.use('/api/users/musicians/all', usersRoutes)

// app.get('/test', async (req, res) => {
//     try {
//         const newUser = new User({
//             name: 'John Doe',
//             email: 'john@example.com'
//         });
//         await newUser.save();
//
//         const currentDate = new Date();
//         for (let i = 0; i < 8; i++) {
//             const startTime = new Date(currentDate);
//             startTime.setHours(9 + i);
//             const endTime = new Date(startTime);
//             endTime.setHours(startTime.getHours() + 1);
//             const newSlot = new AvailabilitySlot({
//                 user_id: newUser._id,
//                 start_time: startTime,
//                 end_time: endTime,
//                 is_booked: false
//             });
//             await newSlot.save();
//         }
//
//         res.send('Test data added successfully');
//     } catch (error) {
//         console.error('Error adding test data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.get('/test2', async (req, res) => {
    try {
        const userId = '65c6b8bb2fc38ebd5334ae0b';
        const date = '2024-02-10';

        const response = await buildResponse.buildResponse(userId, date);

        res.json(response);
    } catch (error) {
        console.error('Error generating test response:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/test3', async (req, res) => {
    try {
        const newUser = new User({
            name: 'Sam Mic',
            email: 'sam@example.com'
        });
        await newUser.save();

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const startTimes = [];
        const endTimes = [];
        for (let i = 0; i < 8; i++) {
            const startTime = new Date(tomorrow);
            startTime.setHours(9 + i);
            startTimes.push(startTime);
            const endTime = new Date(startTime);
            endTime.setHours(startTime.getHours() + 1);
            endTimes.push(endTime);
            const newSlot = new AvailabilitySlot({
                user_id: newUser._id,
                start_time: startTime,
                end_time: endTime,
                is_booked: false
            });
            await newSlot.save();
        }

        res.send('User "Sam Mic" created with availability slots for tomorrow (February 10, 2024)');
    } catch (error) {
        console.error('Error creating user and slots:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
