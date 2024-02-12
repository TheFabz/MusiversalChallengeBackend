const User = require('../../models/User');

const sampleMusicians = [
    { name: 'Miles Davis', email: 'kind-of-blue@milesdavis.com', services: ['trumpet', 'composer'], imageUrl: '' },
    { name: 'John Coltrane', email: 'a-love-supreme@johncoltrane.com', services: ['saxophone', 'composer'], imageUrl: '' },
    { name: 'Duke Ellington', email: 'take-the-a-train@dukeellington.com', services: ['piano', 'composer'], imageUrl: '' },
    { name: 'Charlie Parker', email: 'ornithology@charlieparker.com', services: ['saxophone', 'composer'], imageUrl: '' },
    { name: 'Elvis Presley', email: 'jailhouse-rock@elvispresley.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'The Beatles', email: 'sgt-peppers-lonely-hearts-club-band@thebeatles.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: '' },
    { name: 'Jimi Hendrix', email: 'purple-haze@jimihendrix.com', services: ['guitar', 'vocals'], imageUrl: '' },
    { name: 'Bob Dylan', email: 'blowin-in-the-wind@bobdylan.com', services: ['vocals', 'guitar', 'harmonica'], imageUrl: '' },
    { name: 'Queen', email: 'bohemian-rhapsody@queen.com', services: ['vocals', 'guitar', 'bass', 'drums', 'piano'], imageUrl: '' },
    { name: 'Led Zeppelin', email: 'stairway-to-heaven@ledzeppelin.com', services: ['guitar', 'vocals'], imageUrl: '' },
    { name: 'David Bowie', email: 'space-oddity@davidbowie.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'Pink Floyd', email: 'dark-side-of-the-moon@pinkfloyd.com', services: ['vocals', 'guitar', 'bass', 'drums', 'keyboard'], imageUrl: '' },
    { name: 'The Rolling Stones', email: 'paint-it-black@rollingstones.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: '' },
    { name: 'Michael Jackson', email: 'thriller@michaeljackson.com', services: ['vocals', 'dance'], imageUrl: '' },
    { name: 'Prince', email: 'purple-rain@prince.com', services: ['vocals', 'guitar', 'keyboard'], imageUrl: '' },
    { name: 'AC/DC', email: 'back-in-black@acdc.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: '' },
    { name: 'Nirvana', email: 'smells-like-teen-spirit@nirvana.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'Aretha Franklin', email: 'respect@arethafranklin.com', services: ['vocals', 'piano'], imageUrl: '' },
    { name: 'Elton John', email: 'rocket-man@eltonjohn.com', services: ['vocals', 'piano'], imageUrl: '' },
    { name: 'Eric Clapton', email: 'layla@ericclapton.com', services: ['guitar', 'vocals'], imageUrl: '' },
    { name: 'Ray Charles', email: 'georgia-on-my-mind@raycharles.com', services: ['vocals', 'piano'], imageUrl: '' },
    { name: 'Johnny Cash', email: 'ring-of-fire@johnnycash.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'B.B. King', email: 'the-thrill-is-gone@bbking.com', services: ['guitar', 'vocals'], imageUrl: '' },
    { name: 'Stevie Wonder', email: 'superstition@steviewonder.com', services: ['vocals', 'keyboard', 'harmonica'], imageUrl: '' },
    { name: 'Frank Sinatra', email: 'my-way@franksinatra.com', services: ['vocals'], imageUrl: '' },
    { name: 'Bob Marley', email: 'no-woman-no-cry@bobmarley.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'The Doors', email: 'light-my-fire@thedoors.com', services: ['vocals', 'keyboard'], imageUrl: '' },
    { name: 'Elvis Costello', email: 'peace-love-understanding@elviscostello.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'Buddy Holly', email: 'peggy-sue@buddyholly.com', services: ['vocals', 'guitar'], imageUrl: '' },
    { name: 'Janis Joplin', email: 'me-and-bobby-mcgee@janisjoplin.com', services: ['vocals'], imageUrl: '' },
    { name: 'James Brown', email: 'i-feel-good@jamesbrown.com', services: ['vocals', 'dance'], imageUrl: '' },
];

const generateSampleUsers = async () => {
    try {
        await User.deleteMany({});
        await User.insertMany(sampleMusicians);
        console.log('Sample users created successfully');
    } catch (error) {
        console.error('Error generating sample users:', error);
    }
};

module.exports = generateSampleUsers;
