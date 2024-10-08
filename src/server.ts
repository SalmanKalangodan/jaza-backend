import express  from 'express';
import {config} from "dotenv";
import { DB } from './config/db/db';
import { errorHandler } from './middlewares/errors-handlers';
import user_router from "./routers/users-route"
config()


// Create an Express application
const app = express();

// body parser
app.use(express.json())


// Specify the port number for the server
const port: (number | string ) =  process.env.PORT || 3000;

// End points

app.use("/api/users", user_router);

// database connecting
DB()

// error handler 
app.use(errorHandler);


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});