import { Get, HttpCode, JsonController } from 'routing-controllers';

import { Consumer } from '../queue_bull/consumer';
import { CreateQueue } from '../queue_bull/main';
import { Producer } from '../queue_bull/producer';

@JsonController()
export class QueueController {

    constructor(
        private queue: CreateQueue,
        private producerService: Producer,
        private consumerService: Consumer
    ) { }

    @HttpCode(200)
    @Get('/message')
    private async callBull(): Promise<string> {
        await this.producerService.callProducer(this.queue.getQueue());
        await this.consumerService.callConsumer(this.queue.getQueue());
        return 'Message sending every minutes..'
    }
}