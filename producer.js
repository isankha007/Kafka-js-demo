const {kafka}=require("./client");


async function init(){
    const producer = kafka.producer();
    console.log('connecting...')
    await producer.connect();
    console.log('producer connected')

    await producer.send({
        topic: 'rider-update',
        messages: [
          { 
            partition: 0,
            key:'location-update',
            value: JSON.stringify({name:'Nemo',loc:'BLR'}) },
        ],
      })
      await producer.disconnect();
}

init()