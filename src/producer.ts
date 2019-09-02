import * as bull from 'bull';

import { CreateQueue } from './main';

export class Producer {
    async callProducer(myFirstQueue: bull.Queue): Promise<void> {
        await myFirstQueue.add({
            email: 'mikhailef@mail.ru',
            password: '******'
        });
        await myFirstQueue.add({
            email: 'm.efanov@wintex.pro',
            password: '***'
        });
    }
}

(new Producer()).callProducer((new CreateQueue()).getQueue());