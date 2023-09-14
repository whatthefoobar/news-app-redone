import express from "express";
import axios from "axios";

const app = express();
const port = 5000;

// Define a route for fetching data from the New York Times API
app.get("/api/data", async (req, res) => {
  try {
    const term = req.params.term; // Replace with your desired search term
    const apiKey = "your_api_key"; // Replace with your API key

    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${apiKey}`
    );

    if (response.status === 200) {
      const data = response.data;
      res.json(data);
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
