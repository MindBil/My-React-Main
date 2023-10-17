// const express = require("express");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// const app = express();
// app.use(express.json());

// // Connect to your MongoDB database
// mongoose.connect("mongodb://localhost/your-database-name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// // Define a user schema and model (you can add more fields as needed)
// const User = mongoose.model("User", new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
// }));

// // Initialize Passport
// app.use(passport.initialize());

// // Configure the local strategy for Passport
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     (email, password, done) => {
//       User.findOne({ email }, (err, user) => {
//         if (err) return done(err);
//         if (!user) return done(null, false, { message: "Incorrect email." });
//         if (user.password !== password) return done(null, false, { message: "Incorrect password." });
//         return done(null, user);
//       });
//     }
//   )
// );

// // Serialize and deserialize user for session management (you can customize as needed)
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// // API endpoint for user registration
// app.post("/api/register", (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   User.findOne({ email }, (err, user) => {
//     if (err) return res.status(500).json({ message: "Error registering user." });
//     if (user) return res.status(400).json({ message: "Email already in use." });

//     // Create a new user
//     const newUser = new User({ username, email, password });

//     newUser.save((err) => {
//       if (err) return res.status(500).json({ message: "Error registering user." });
//       return res.status(200).json({ message: "Registration successful." });
//     });
//   });
// });

// // API endpoint for user login
// app.post(
//   "/api/login",
//   passport.authenticate("local", { failureRedirect: "/api/login-failed" }),
//   (req, res) => {
//     res.status(200).json({ message: "Login successful." });
//   }
// );

// app.get("/api/login-failed", (req, res) => {
//   res.status(401).json({ message: "Login failed." });
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });

// to setup project - npm install nodemon express cors
// then - npm run dev

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});