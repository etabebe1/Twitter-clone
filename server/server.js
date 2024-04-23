const express = require("express");
const app = express();

require("dotenv").config();
// const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const sessionRouter = require("./routes/session.Routes");
const userRouter = require("./routes/user.Routes");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/api/sessions", sessionRouter);

// TODO: FIXME: Fix the issue occuring here with the /api/users route
app.use("/api/users/", userRouter);
// // Custom error handler middleware
app.use(errorHandler);

//*::::: port and URI connection :::::*//
const port = process.env.PORT || 3030;
const URI = process.env.MONGO_URI;

//*:::::: Initializing server ::::::*//
const start = async () => {
  try {
    await connectDB(URI);
    app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
  } catch (error) {
    console.log(error);
  }
};
start();
