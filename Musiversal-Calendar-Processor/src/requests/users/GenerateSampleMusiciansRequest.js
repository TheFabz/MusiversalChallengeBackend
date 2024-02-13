const express = require('express');
const User = require('../../models/User');
const router = express.Router();

const sampleMusicians = [
    { name: 'Miles Davis', email: 'kind-of-blue@milesdavis.com', services: ['trumpet', 'composer'], imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2022/05/MilesDavis-FrancisWolff.jpg' },
    { name: 'John Coltrane', email: 'a-love-supreme@johncoltrane.com', services: ['saxophone', 'composer'], imageUrl: 'https://f4.bcbits.com/img/0025556617_0' },
    { name: 'Charlie Parker', email: 'ornithology@charlieparker.com', services: ['saxophone', 'composer'], imageUrl: 'https://npr.brightspotcdn.com/aa/56/8aa63dfd4ab0ad7032d6501abcb4/charlie-parker-002-1940s.jpg' },
    { name: 'Elvis Presley', email: 'jailhouse-rock@elvispresley.com', services: ['vocals', 'guitar'], imageUrl: 'https://cdn.britannica.com/85/202285-050-EF215325/Elvis-Presley-Girl-Happy-Boris-Sagal.jpg' },
    { name: 'The Beatles', email: 'sgt-peppers-lonely-hearts-club-band@thebeatles.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: 'https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg' },
    { name: 'Jimi Hendrix', email: 'purple-haze@jimihendrix.com', services: ['guitar', 'vocals'], imageUrl: 'https://www.azcentral.com/gcdn/-mm-/d75ee3c5728b649e6a2b60114235b042ea55e4a5/c=0-173-748-735/local/-/media/Phoenix/None/2014/10/05/1412494866000-Jimi-Hendrix.jpg' },
    { name: 'Bob Dylan', email: 'blowin-in-the-wind@bobdylan.com', services: ['vocals', 'guitar', 'harmonica'], imageUrl: 'https://miro.medium.com/v2/resize:fit:8384/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg' },
    { name: 'Queen', email: 'bohemian-rhapsody@queen.com', services: ['vocals', 'guitar', 'bass', 'drums', 'piano'], imageUrl: 'https://images.impresa.pt/expresso/2023-08-21-queen.jpg-b502975e/original/mw-1920' },
    { name: 'Led Zeppelin', email: 'stairway-to-heaven@ledzeppelin.com', services: ['guitar', 'vocals'], imageUrl: 'https://cdn.britannica.com/47/243647-050-7C88FBF5/Led-Zeppelin-1968-studio-portrait-John-Bohham-Jimmy-Page-Robert-Plant-John-Paul-Jones.jpg' },
    { name: 'David Bowie', email: 'space-oddity@davidbowie.com', services: ['vocals', 'guitar'], imageUrl: 'https://s.rfi.fr/media/display/579e9a5a-0ef7-11ea-ac81-005056a9aa4d/w:1280/p:1x1/2015_david-bowie.jpg' },
    { name: 'Pink Floyd', email: 'dark-side-of-the-moon@pinkfloyd.com', services: ['vocals', 'guitar', 'bass', 'drums', 'keyboard'], imageUrl: 'https://i.scdn.co/image/d011c95081cd9a329e506abd7ded47535d524a07' },
    { name: 'The Rolling Stones', email: 'paint-it-black@rollingstones.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: 'https://cdn.britannica.com/41/197341-050-4859B808/The-Rolling-Stones-Bill-Wyman-Keith-Richards-1964.jpg' },
    { name: 'Michael Jackson', email: 'thriller@michaeljackson.com', services: ['vocals', 'dance'], imageUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/512227_v9_bb.jpg' },
    { name: 'Prince', email: 'purple-rain@prince.com', services: ['vocals', 'guitar', 'keyboard'], imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prince_1980.jpg/220px-Prince_1980.jpg' },
    { name: 'AC/DC', email: 'back-in-black@acdc.com', services: ['vocals', 'guitar', 'bass', 'drums'], imageUrl: 'https://www.nme.com/wp-content/uploads/2016/09/2014ACDC_Press_271114-1-1-696x464.jpg' },
    { name: 'Nirvana', email: 'smells-like-teen-spirit@nirvana.com', services: ['vocals', 'guitar'], imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/06/nirvana-deep-cuts-listen-songs-61311c42-3873-44c1-8c74-6a6e053daee1.jpg' },
    { name: 'Aretha Franklin', email: 'respect@arethafranklin.com', services: ['vocals', 'piano'], imageUrl: 'https://imageio.forbes.com/specials-images/dam/imageserve/77702590/960x0.jpg?height=584&width=711&fit=bounds' },
    { name: 'Elton John', email: 'rocket-man@eltonjohn.com', services: ['vocals', 'piano'], imageUrl: 'https://img.bertrand.pt/autor/imagem/elton-john/NDV8MjgyMzEzNXwxNjgwNzAyMjM4MDAwfHdlYnA=' },
    { name: 'Eric Clapton', email: 'layla@ericclapton.com', services: ['guitar', 'vocals'], imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1026620082.jpg' },
    { name: 'Ray Charles', email: 'georgia-on-my-mind@raycharles.com', services: ['vocals', 'piano'], imageUrl: 'https://cdn.britannica.com/69/82669-050-B3421191/Ray-Charles-Nashville-Tenn-2003.jpg' },
    { name: 'Johnny Cash', email: 'ring-of-fire@johnnycash.com', services: ['vocals', 'guitar'], imageUrl: 'https://cdn.theatlantic.com/thumbor/Z_Ai_PL2R_ynq-ej4k4GbvmvGTE=/438x0:1563x1125/1080x1080/media/img/2021/12/CC_Metcalf_CASH_HP/original.jpg' },
    { name: 'B.B. King', email: 'the-thrill-is-gone@bbking.com', services: ['guitar', 'vocals'], imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/bb_king_Photo_OneKindFa_305RGBbbking_universal_music_group.jpg?resize=980:*' },
    { name: 'Stevie Wonder', email: 'superstition@steviewonder.com', services: ['vocals', 'keyboard', 'harmonica'], imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-631196894.jpg' },
    { name: 'Frank Sinatra', email: 'my-way@franksinatra.com', services: ['vocals'], imageUrl: 'https://resources.tidal.com/images/eef43e84/99ea/4a4d/bdae/712590168a74/750x750.jpg' },
    { name: 'Bob Marley', email: 'no-woman-no-cry@bobmarley.com', services: ['vocals', 'guitar'], imageUrl: 'https://cdn.britannica.com/22/19222-050-2267F357/Bob-Marley.jpg' },
    { name: 'The Doors', email: 'light-my-fire@thedoors.com', services: ['vocals', 'keyboard'], imageUrl: 'https://i0.wp.com/www.classicposters.com/wp-content/uploads/2021/03/Doors.jpg?fit=500%2C497&ssl=1' },
    { name: 'Elvis Costello', email: 'peace-love-understanding@elviscostello.com', services: ['vocals', 'guitar'], imageUrl: 'https://people.com/thmb/wS6lUCGRch9HX7EwmDZLFKh9C0A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/elvis-costello-4-9224a9c3b48143c08d92e600995429f4.jpg' },
    { name: 'Buddy Holly', email: 'peggy-sue@buddyholly.com', services: ['vocals', 'guitar'], imageUrl: 'https://i0.wp.com/static.guim.co.uk/Guardian/music/gallery/2009/feb/02/popandrock1/BH-601-B-by-Philip-Gotlop-8105.jpg' },
    { name: 'Janis Joplin', email: 'me-and-bobby-mcgee@janisjoplin.com', services: ['vocals'], imageUrl: 'https://cdn.britannica.com/42/196042-050-4D7796D0/Janis-Joplin.jpg' },
    { name: 'James Brown', email: 'i-feel-good@jamesbrown.com', services: ['vocals', 'dance'], imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2015/4/15/1429095540687/James-Brown-with-micropho-008.jpg?width=465&dpr=1&s=none' },
];

router.post('/', async (req, res) => {
    try {
        await User.deleteMany({});
        await User.insertMany(sampleMusicians);
        console.log('Sample users created successfully');
        res.status(200).json({ message: 'All new users added successfully' });
    } catch (error) {
        console.error('Error generating sample users:', error);
        res.status(500).json({ error: 'An error occurred while generating sample users' });
    }
});

module.exports = router;
