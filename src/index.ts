import 'reflect-metadata';

import * as express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

import { QueueController } from './controllers/QueueController';

import Arena = require('bull-arena');
//Создаем приложение Express
const app = express();
useContainer(Container);

const arenaConfig = Arena({
    queues: [
        {
            // Name of the bull queue
            name: "Emailer",

            // Hostname
            hostId: "mikhailef",

            // Redis auth
            redis: {
                port: 6379,
                host: '127.0.0.1'
            },
        },
    ],
},
    {
        // Path
        basePath: '/arena',
        // Let express handle the listening.
        disableListen: true
    });

useExpressServer(app, {
    controllers: [QueueController],
});

app.use('/', arenaConfig);
//Запуск приложения на порту 3000
app.listen(3000, () => {
    console.log('Server is running on 3000');
});
