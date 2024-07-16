import express from "express"
import  {createHandler}  from "graphql-http/lib/use/express"
import { userschema } from "./schema/Index";
import cors from  "cors";
import { dbconnect } from "./config/db";
dbconnect();

var { ruruHTML } = require("ruru/server")
const app=express();
const PORT=4600;
app.use(cors());

app.all(
    "/graphql",
    createHandler({
      schema:userschema
    })
  );
  
 app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })  
app.listen(PORT)
console.log("Running a GraphQL API server at http://localhost:4600")
