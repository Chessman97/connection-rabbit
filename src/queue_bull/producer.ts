import * as bull from 'bull';
import { Service } from 'typedi';

//For run
//import { CreateQueue } from './main';

@Service()
export class Producer {
    async callProducer(myFirstQueue: bull.Queue): Promise<void> {
        await myFirstQueue.add({
            email: 'm.efanov@wintex.pro',
            password: '***',
            name: 'Efanov Mikhail'
        }, { repeat: { cron: '* * * * *' } });
        console.log('Producer is running');
    }
}

//(new Producer()).callProducer((new CreateQueue()).getQueue());