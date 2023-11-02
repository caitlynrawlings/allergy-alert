import express from "express"
import cors from "cors"
import recipes from "./api/recipes.route.js"
import hello from "./api/hello.route.js"

const app = express()

app.use(cors())
app.use(express.json())

// To add a call to the database, include the call "app.use(<URL from root>)"
// and add a "route" file to the API folder that follows the existing layout
app.use("/api/v1/hello", hello)  // This is purely for testing
app.use("/api/v1/recipes", recipes)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app

// Note: to run the server, run the command "nodemon server index.js" in the 
// terminal (assuming Node.js is already installed)