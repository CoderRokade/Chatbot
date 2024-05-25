import dotenv from 'dotenv';
import express from 'express';
import { connect,disconnect } from 'mongoose';
import mongoose,{ConnectOptions} from 'mongoose';


dotenv.config({ path: '../env' }).parsed;


async function connectToDatabase() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL
      // ,{useNewUrlParser: true, 
      // useUnifiedTopology: true,
     
  )    //mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };