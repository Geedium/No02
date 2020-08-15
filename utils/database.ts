import * as mongoose from 'mongoose'

const connection:any = {};

async function dbConnect() {
    if(connection.isConnected) {
        return;
    }

    const db:any = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected)
}

export default dbConnect;