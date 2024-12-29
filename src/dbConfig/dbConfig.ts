import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to the database!");
    });

    connection.on("error", (error) => {
      console.log("Error connecting to the database", error);
    });
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
}