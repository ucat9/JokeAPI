import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const BASE_URL = "https://v2.jokeapi.dev";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Render the home page with random joke
app.get("/", async (req, res) => {
    const result = await axios.get(BASE_URL + "/joke/Any");
    console.log("Result: ", result.data);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
});

// Render the home page with given criteria
app.post("/aJoke", async (req, res) => {
    const category = req.body.category;
    const type = req.body.type;
    const result = await axios.get(BASE_URL + "/joke/" + category + "?type=" + type);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});