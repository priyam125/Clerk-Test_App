import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

//if we are calling this file for the first time
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  // if a cached connection already exists then we return the
  // cached connection instead of making a new connection and
  // we exit immediately
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  //if cached promise exists then use cached promise or create
  //a new connection
  console.log("MONGODB_URL", MONGODB_URL);
  
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "testapp",
      bufferCommands: false,
    });
    

  cached.conn = await cached.promise;

  console.log("cached.conn", cached.conn);
  

  return cached.conn;
};
