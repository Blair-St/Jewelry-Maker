const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = "mongodb+srv://BlairAdmin:" + process.env.MONGO_PASSWORD + "@jewelrycluster.bt1sd1m.mongodb.net/?retryWrites=true&w=majority&appName=JewelryCluster";

// Export the connectDB function for use in server.js
exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

// The original MongoClient connection code can remain for direct client usage if needed
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// This function can be used for operations that require the MongoDB client directly
async function runClient() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error(`Error with MongoDB client: ${err.message}`);
    throw err;
  }
}

// Export the client runner function as well
exports.runClient = runClient;