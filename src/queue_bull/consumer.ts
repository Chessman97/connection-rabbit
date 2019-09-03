import bull from 'bull';
import { Service } from 'typedi';

//For run
//import { CreateQueue } from './main';

@Service()
export class Consumer {
    async  callConsumer(myFirstQueue: bull.Queue): Promise<void> {
        myFirstQueue.process(async (job: bull.Job, done: bull.DoneCallback) => {
            console.log(job.data);
            done();
        });
        myFirstQueue.on('completed', job => {
            console.log(`Job with id has been completed ` + job.id);
            console.log(job);
        });
        console.log('Consumer is running');
    }
}

//(new Consumer()).callConsumer((new CreateQueue()).getQueue());