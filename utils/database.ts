import * as mongoose from 'mongoose'

type dBInfo = {
    isConnected: boolean
}

const connection:dBInfo = {
    isConnected: false
}

export default async function dbConnect() : Promise<any> {
    if(connection.isConnected)
        return

    const db:mongoose.Mongoose = await mongoose.connect("mongodb://[testUser:test123@]85.232.131.161[:27017]", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = !!db.connections[0].readyState
    console.log('Connected: ', connection.isConnected)
}