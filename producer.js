const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const producer = kafka.producer();

async function run() {
  await producer.connect();
  await producer.send({
    topic: 'test-kafka',
    messages: [
      { value: 'Hello, Kafka!' },
      { value: 'This is a real-time message.' },
    ],
  });
  await producer.disconnect();
}

run().catch(console.error);