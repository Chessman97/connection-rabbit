import * as bull from 'bull';

export async function callConsumer(myFirstQueue: bull.Queue): Promise<void> {
    myFirstQueue.process(async (job, data) => {
        console.log(job.data);
        data();
    });
}