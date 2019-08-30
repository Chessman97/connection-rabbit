RabbitMQ - это программное обеспечение брокера сообщений с открытым исходным кодом (иногда называемое промежуточным программным обеспечением), которое реализует расширенный протокол очереди сообщений (AMQP). Сервер RabbitMQ написан на языке программирования Erlang и построен на платформе Open Telecom Platform для кластеризации и обработки отказа. Клиентские библиотеки для взаимодействия с брокером доступны для всех основных языков программирования.

 Для удобства будем использовать Docker

 Установка docker для ubuntu 18.04
1. sudo apt install apt-transport-https ca-certificates curl software-properties-common
2. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
3. sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
4. sudo apt update
5. apt-cache policy docker-ce
6. sudo apt install docker-ce
7. docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 -p 5672:5672 rabbitmq:3-management \ Для хостовой машины прокинем 2 порта из docker (8080 - веб-панель, 5672 - использование непосредственно RabbitMQ)

 Устанавливаем приложение

1. git clone https://github.com/Chessman97/connection-rabbit
2. npm install
3. npm run build 
4. node build/send.js First message \ Отправляем сообщение (оно будет находиться в очереди)
5. node build/recive.js \ Принимаем сообщения из очереди (можно запускать несколько приемщиков, тогда сообщения из очереди распределяются по порядку)
