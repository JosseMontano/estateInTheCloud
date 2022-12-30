/* Libs */
import express from "express";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";
import "reflect-metadata";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import { metRoute } from "./routes";
import ws from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { execute, subscribe } from "graphql";

const { urlCors, server } = require("./config");
var cookieParser = require("cookie-parser");

/* Setup Express */
const app = express();

async function start() {
  /* img */
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "./upload",
    })
  );
  /* cors */
  app.use(
    cors({
      credentials: true,
      origin: [urlCors.secret],
    })
  );
  //    origin: urlCors.secret
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(cookieParser());

  app.use(express.static("src"));

  //apollo
  app.use(
    "/graphql",
    graphqlHTTP((req) => ({
      schema,
      graphiql: {
        headerEditorEnabled: true,
      },
    }))
  );
  /*   app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema,
    })
  ); */

  //routes
  metRoute(app);

  /* middleware err */
  app.use((err: any, req: any, res: any, next: any) => {
    return res.status(400).json({
      message: err.message,
    });
  });

  const port = server.port || 4000;

  const serverSocket = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
    const wsServer = new ws.Server({
      server: serverSocket,
      path: "/graphql",
    });
    useServer(
      {
        schema,
        execute,
        subscribe,
        onConnect: (ctx) => {
          console.log("connect");
        },
        onSubscribe: (ctx, msg) => {
          console.log("Subscribe");
        },
        onNext: (ctx, msg, args, result) => {
          console.debug("Next");
        },
        onError: (ctx, msg, errors) => {
          console.error("Error");
        },
        onComplete: (ctx, msg) => {
          console.log("Complete");
        },
      },
      wsServer
    );
  });
}

start();
