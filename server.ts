import express from "express"
import  {createHandler}  from "graphql-http/lib/use/express"
import { userschema } from "./schema/Index";
import cors from  "cors";
import { getUsers } from "./schema/Queries/UserQueries";
require("./config/db");
const root = {
  getUsers
}
var { ruruHTML } = require("ruru/server")
const app=express();
const PORT=4600;
app.use(cors());
// fetch schema,

var companyDetails={
  "comanyName":"Neosoft",
  "baseLocation":"Andheri, Mumbai",
}
app.all(
    "/graphql",
    createHandler({
      schema: userschema,
      rootValue:root
    })
  );
 app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })  
app.listen(PORT)
console.log("Running a GraphQL API server at http://localhost:4600")
