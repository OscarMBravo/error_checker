import express from "express";
const app = express();
import cors from "cors";
app.use(express.json());
app.use(cors());
const host = "localhost";
const port = 8002;
import runErrorCheck from "./runErrorCheck.js";
app.post("/run-full-check", function (req, res) {
    const { word, target, hints } = req.body;
    const errorCheckOutput = runErrorCheck(word, target, hints);
    const responseData = `${JSON.stringify(errorCheckOutput)}`;
    console.log("responseData", responseData);
    res.send(responseData);
});
app.get("/", (req, res) => {
    console.log("in home");
    res.send("Welcome to Error Check!");
});
app.listen(port, function (error) {
    if (error)
        throw error;
    console.log(`Server is running on http://${host}:${port}`);
});
