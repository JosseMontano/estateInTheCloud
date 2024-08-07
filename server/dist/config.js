"use strict";
const { config } = require("dotenv");
config();
module.exports = {
    methodDb1: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    },
    methodDbTwo: {
        databaseUrl: process.env.DATABASE_URL,
    },
    jwtEnv: {
        secret: process.env.JWT_SECRET,
    },
    urlCors: {
        secret: process.env.CORS,
    },
    server: {
        port: process.env.PORT,
        portCors: process.env.PORTCORS,
    },
    emailer: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
    googleMaps: {
        key: process.env.API_MAPS,
    },
    servers: {
        serverPy: process.env.SERVER_PYTHON,
    }
};
