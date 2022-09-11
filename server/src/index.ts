import express from "express";
import morgan from "morgan";
import cors from "cors";
const estateRoutes = require("./routes/estates.routes");
const sessionRoutes = require("./routes/sessions.routes");
var cookieParser = require("cookie-parser");

const app = express();
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173" 
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(estateRoutes);
app.use(sessionRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  return res.json({
    message: err.message,
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server");
});
