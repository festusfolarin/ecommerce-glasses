import "dotenv/config";

import express from "express";
import cors from "cors";
import ordersRoutes from "./routes/ordersRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import session from "express-session";

import { connectToDatabase } from "./config/mongodbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5173/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

app.use(
  cors({
    origin: [
      "https://ecommerce-glasses-seven.vercel.app/",
      "https://ecommerce-glasses-seven.vercel.app",
      "http://localhost:5173/",
      "http://localhost:5173",
    ],
  })
); //to resolve port conflict
app.use(express.json()); //to access data from frontend

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is currently running" });
});

app.use("/api/v1/order", ordersRoutes);
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on PORT: ${PORT}`);
});
