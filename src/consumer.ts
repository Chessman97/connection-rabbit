import * as bull from 'bull';

import { CreateQueue } from './main';

export class Consumer {
    async  callConsumer(myFirstQueue: bull.Queue): Promise<void> {
        myFirstQueue.process(async (job, data) => {
            console.log(job.data);
            data();
        });
    }
}

(new Consumer()).callConsumer((new CreateQueue()).getQueue());