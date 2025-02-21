import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import filterNullProperties from "./util.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://news-app-redone-client.vercel.app",
    ],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

const port = 5000;

const apiKey = process.env.API_KEY;

// Create a transporter for Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/popular", async (req, res) => {
  try {
    // console.log("fetching home popular news data from api in my backend!");
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
app.get("/api/articlesearch", async (req, res) => {
  // test: /api/articlesearch?q=politics, endpoint works
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ error: "Query parameter (q) is required" });
    }

    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`
    );
    const data = await response.json();
    // const articleSearchStories = data.response;
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/categories/:section", async (req, res) => {
  const { section } = req.params;

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

// New endpoint to handle contact form submission
app.post("/api/contact", async (req, res) => {
  const { fullName, email, message } = req.body;

  console.log(fullName, email, message);

  // Compose the email
  const mailOptions = {
    from: email, // Sender address
    to: process.env.NODEMAILER_USER, // Admin email address
    subject: `News-app contact us from  from ${fullName}`,
    text: `You have received a new message from ${fullName} (${email}):\n\n${message}`,
  };

  try {
    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
