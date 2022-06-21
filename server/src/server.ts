import bodyParser from "body-parser";
import passport from "passport";
import connectDB from "../config/database";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import AppRouter from "./routes";
import axios from "axios";
import { authMiddleware } from "./middlewares/auth.middleware";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration

app.use(cors({
  origin: "*",
  credentials: true
}));

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize()),
  authMiddleware(passport);
  app.use((_: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  

router.init();


// TODO: Move that to model GraphQL
const schema = buildSchema(`
  type Query {
    todos: String
  }
`);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get("http://localhost:5000/api/todos");
    return todos.data;
  },
};


// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

const port = app.get("port");
const server = app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${port}`)
);

export default server;
