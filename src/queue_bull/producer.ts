import * as bull from 'bull';

import { CreateQueue } from './main';

export class Producer {
    async callProducer(myFirstQueue: bull.Queue): Promise<void> {
        await myFirstQueue.add({
            email: 'm.efanov@wintex.pro',
            password: '***',
            name: 'Efanov Mikhail'
        }, { repeat: { cron: '* * * * *' } });
    }
}

(new Producer()).callProducer((new CreateQueue()).getQueue());