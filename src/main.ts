import * as bull from 'bull';

export class CreateQueue {
    public myFirstQueue: bull.Queue;
    constructor() {
        this.myFirstQueue = new bull('my first', 'redis://127.0.0.1:6379');
    }
    public getQueue(): bull.Queue {
        return this.myFirstQueue;
    }
    public setQueue(queue: bull.Queue): void {
        this.myFirstQueue = queue;
    }
}