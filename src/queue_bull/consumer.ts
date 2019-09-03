import * as bull from 'bull';

import { CreateQueue } from './main';

export class Consumer {
    async  callConsumer(myFirstQueue: bull.Queue): Promise<void> {
        myFirstQueue.process(async (job: bull.Job, done: bull.DoneCallback) => {
            console.log(job.data);
            done();
        });
        myFirstQueue.on('completed', job => {
            console.log(`Job with id has been completed `, + job.id);
        });
    }
}

(new Consumer()).callConsumer((new CreateQueue()).getQueue());