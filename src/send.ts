import * as amqp from 'amqplib/callback_api';

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    console.log('Hello, world!');
});