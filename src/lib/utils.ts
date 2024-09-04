import mongoose from "mongoose";

// Define the connection type with an optional isConnected property
interface Connection {
  isConnected?: number;
}

// Initialize the connection object with the Connection interface
const connection: Connection = {};

export const connectToDB = async (): Promise<void> => {
  try {
    // Check if already connected
    if (connection.isConnected) return;

    // Ensure the environment variable is defined and connect to the database
    const mongoUri = process.env.MONGO;
    if (!mongoUri) {
      throw new Error("MONGO environment variable is not defined.");
    }

    // Connect to the database
    const db = await mongoose.connect(mongoUri);

    // Set the connection status
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    // Log and rethrow the error
    console.error(error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};
