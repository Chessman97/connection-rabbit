import * as bull from 'bull';

import { callConsumer } from './consumer';
import { callProducer } from './producer';

async function createConnection(): Promise<void> {
    const myFirstQueue = new bull('my first', 'redis://127.0.0.1:6379');
    await callProducer(myFirstQueue);
    callConsumer(myFirstQueue);
}

createConnection();