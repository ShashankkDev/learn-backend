import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nWAAOOO!!! MongoDB Connected !! DB HOST: ${connectionInstance}`
    );
    console.log(
      "Connection readyState:",
      connectionInstance.connection.readyState
    ); // Connection state
    console.log("Database name:", connectionInstance.connection.name); // Database name
    console.log("Host:", connectionInstance.connection.host); // Hostname
    console.log("Port:", connectionInstance.connection.port); // Port number
    console.log(
      "Collections:",
      Object.keys(connectionInstance.connection.collections)
    ); // List of collections
    console.log("Models:", Object.keys(connectionInstance.connection.models));
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
