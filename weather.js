import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();


const API_KEY = "";

// const BASE_URL = "https://api.openuv.io/api/v1/uv?lat=:lat&lng=:lng&alt=:alt&dt=:dt";
const BASE_URL = "https://api.openuv.io/api/v1/uv";
const URL_1= "https://api.openuv.io/api/v1/stat";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



const config = {
    headers: { "x-access-token": API_KEY },
  };


// Render the home page with random joke
app.get("/", async (req, res) => {
    try {
        const lat = 26.73;
        const lng = 83.43;
        // const alt = 100;
        const full_URL = BASE_URL + "?lat=" + lat + "&lng=" + lng;
        const result = await axios.get(full_URL, config);
        console.log("Full URL : ", full_URL);
        // console.log("Result: ", result.data);
        console.log("Weather: ", result.data.result);
    }
    
    // res.render("index.ejs", {content: JSON.stringify(result)});
    catch (error) {
        console.log("Error: ", error);
      }
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
