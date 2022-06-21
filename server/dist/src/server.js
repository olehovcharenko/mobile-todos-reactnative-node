"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const database_1 = __importDefault(require("../config/database"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const routes_1 = __importDefault(require("./routes"));
const axios_1 = __importDefault(require("axios"));
const auth_middleware_1 = require("./middlewares/auth.middleware");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = new routes_1.default(app);
// Connect to MongoDB
database_1.default();
// Express configuration
app.use(cors_1.default({
    origin: "*",
    credentials: true
}));
app.set("port", process.env.PORT || 5000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(passport_1.default.initialize()),
    auth_middleware_1.authMiddleware(passport_1.default);
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
router.init();
// TODO: Move that to model GraphQL
const schema = graphql_1.buildSchema(`
  type Query {
    todos: String
  }
`);
// TODO: Create graphQL controller
const rootValue = {
    todos: () => __awaiter(void 0, void 0, void 0, function* () {
        // TODO: Create http service for that
        const todos = yield axios_1.default.get("http://localhost:5000/api/todos");
        return todos.data;
    }),
};
// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));
const port = app.get("port");
const server = app.listen(port, () => 
// tslint:disable-next-line:no-console
console.log(`Server started on port ${port}`));
exports.default = server;
//# sourceMappingURL=server.js.map