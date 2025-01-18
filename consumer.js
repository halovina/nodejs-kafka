const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const consumer = kafka.consumer({ groupId: 'my-group' });

const run = async () =>  {
    await consumer.connect();
    await consumer.subscribe({
        topic: "test-kafka", fromBeginning: true
    });

    await consumer.run({
        eachMessage: async({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            });
        },
    });
};


run().catch(console.error)