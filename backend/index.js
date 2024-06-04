import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import filterNullProperties from "./util.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https:.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const port = 5000;

const apiKey = process.env.API_KEY;

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/popular", async (req, res) => {
  try {
    console.log("fetching home popular news data from api in my backend!");
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${apiKey}`
    );
    //api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

    https: if (response.status === 200) {
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

//search articles by term
app.get("/articlesearch", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ error: "Query parameter (q) is required" });
    }

    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/categories/:section", async (req, res) => {
  const { section } = req.params;
  console.log(`fetching data from api in my backend for ${section}!`);
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
    );
    const topStories = response.data.results; // Assuming the data you need is in the 'results' property
    res.json({ topStories });
  } catch (error) {
    res.status(500).json({ error: "Error fetching top stories" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
