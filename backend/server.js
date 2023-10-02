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
    const term = req.params.term; // Replace with your desired search term
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
