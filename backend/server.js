import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

const apiKey = process.env.API_KEY; // Replace with your API key

// gets popular news to pupulate left side
app.get("/api/popular", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${apiKey}`
    );

    if (response.status === 200) {
      const data = response.data;
      res.json(data.results);
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
