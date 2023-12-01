import express from "express"
import cors from "cors"
import recipes from "./api/recipes.route.js"
import accounts from "./api/accounts.route.js"
import hello from "./api/hello.route.js"

const app = express()
const FRONTEND_URL = "http://localhost:3000"; // "https://allergyalert.onrender.com"

const corsOptions = {
    origin: FRONTEND_URL
}

app.use(cors(corsOptions))
app.use(express.json())

// To add a call to the database, include the call "app.use(<URL from root>)"
// and add a "route" file to the API folder that follows the existing layout

// Testing calls
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});
app.use("/api/v1/hello", hello)

// Database retrievals
app.use("/api/v1/recipes", recipes)
app.use("/api/v1/accounts", accounts)
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))

export default app