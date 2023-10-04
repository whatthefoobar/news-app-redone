import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import filterNullProperties from "./util.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const port = 5000;

const apiKey = process.env.API_KEY; // Replace with your API key
const mediaStackApiKey = process.env.MEDIASTACK_API_KEY;

// gets popular news to pupulate left side
app.get("/api/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${apiKey}`
    );

    if (response.status === 200) {
      const data = response.data;
      const filteredData = response.data.results.map(filterNullProperties);
      res.json(filteredData);
    } else {
      res
        .status(response.status)
        .json({ error: "Failed to fetch data from the API." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//right side section hot books NOT WORKING NOT SURE WHY
app.get("/api/books", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/overview.json?api-key=${apiKey}` //doesnt work :()
    );

    if (response.status === 200) {
      const data = response.data;
      res.json(data);
    } else if (response.status !== 200) {
      throw new Error("Non-OK response from the API");
    }

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});
//Mediastack routes:
app.get("/api/live-news", async (req, res) => {
  try {
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=${mediaStackApiKey}`;

    const response = await axios.get(apiUrl);
    const filteredData = response.data.data.map(filterNullProperties);

    res.json(filteredData);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching data from MediaStack API:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching data from the API" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
