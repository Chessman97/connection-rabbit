import * as bull from 'bull';

export async function callProducer(myFirstQueue: bull.Queue): Promise<void> {
    await myFirstQueue.add({
        email: 'mikhailef@mail.ru',
        password: '******'
    });
}