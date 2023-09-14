import express from "express";
import axios from "axios";

const app = express();
const port = 5000;

app.get("/api/data", async (req, res) => {
  try {
    // Replace this URL with the API endpoint you want to fetch data from
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      const data = response.data;
      res.json(data);
    } else {
      res.status(response.status).json({ error: "Failed to fetch data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
