/* Libs */
import express from "express";
import morgan from "morgan";
import cors from "cors";
var cookieParser = require("cookie-parser");

/* files Routes */
const estateRoutes = require("./routes/estates.routes");
const sessionRoutes = require("./routes/sessions.routes");
const { urlCors, server } = require("./config");

/* Setup Express */
const app = express();
/* cors */
app.use(
  cors({
    credentials: true,
    origin: urlCors.secret,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

/* Routes */
app.use(estateRoutes);
app.use(sessionRoutes);

/* middleware err */
app.use((err: any, req: any, res: any, next: any) => {
  return res.json({
    message: err.message,
  });
});

const port = server.port || 4000;
app.listen(port, () => {
  console.log("server is running");
});
