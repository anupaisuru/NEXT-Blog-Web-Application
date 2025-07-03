import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
    try {
        if(connection.isConnected){
            console.log("use existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
    }
}