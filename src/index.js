const Arena = require('bull-arena');

const express = require('express');
const router = express();
const arenaConfig = Arena({
    queues: [
        {
            // Name of the bull queue, this name must match up exactly with what you've defined in bull.
            name: "Notification_Emailer",

            // Hostname or queue prefix, you can put whatever you want.
            hostId: "MyAwesomeQueues",

            // Redis auth.
            redis: {
                port: 6379,
                host: '127.0.0.1'
            },
        },
    ],
},
    {
        // Make the arena dashboard become available at {my-site.com}/arena.
        basePath: '/arena',

        // Let express handle the listening.
        disableListen: true
    });

// Make arena's resources (js/css deps) available at the base app route
router.use('/', arenaConfig);
const PORT = 3000;
router.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});