import "dotenv/config";

import express from "express";
import cors from "cors";
import ordersRoutes from "./routes/ordersRoutes.js";

import { connectToDatabase } from "./config/mongodbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors()); //to resolve port conflict
app.use(express.json()); //to access data from frontend

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is currently running" });
});

app.use("/api/v1/order", ordersRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on PORT: ${PORT}`);
});
