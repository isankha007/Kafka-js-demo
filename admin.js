const {kafka}=require("./client");


async function init(){
    const admin=kafka.admin();
    console.log("admin connecting...");
    admin.connect();
    console.log("admin connection success...");
    await admin.createTopics({
       topics:[
        {
            topic:'rider-update',
            numPartitions:2,
        }
       ]
    });
    console.log("Topic created successfully [rider-update]")

    console.log("Disconnecting Admin")

    await admin.disconnect();
}

init()