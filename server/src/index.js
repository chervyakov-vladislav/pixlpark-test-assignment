import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

const PORT = 8080;

const ALL_NEWS_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const ONE_NEW_URL = (newsId) =>
  `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`;

app.get("/news", async (_req, res) => {
  try {
    const response = await fetch(ALL_NEWS_URL);
    const newsIds = await response.json();

    const sortedData = [];
    const limit = 10;
    let currentIndex = 0;

    while (sortedData.length < 100 && currentIndex < newsIds.length) {
      const partOfIds = newsIds.slice(currentIndex, currentIndex + limit);
      const partOFPromises = partOfIds.map((newsId) =>
        fetch(ONE_NEW_URL(newsId)).then((response) => response.json())
      );

      const partOFData = await Promise.all(partOFPromises);
      sortedData.push(...partOFData.filter((item) => item.type === "story"));
      currentIndex += limit;

      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    sortedData.sort((a, b) => b.time - a.time);

    res.json(sortedData.slice(0, 100));
  } catch (error) {
    console.log(error);
  }
});

app.post("/news", async (req, res) => {
  try {
    const { commentIds } = req.body;
    const commentsPromises = commentIds.map((newsId) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`).then(
        (response) => response.json()
      )
    );
    const commentsResponses = await Promise.all(commentsPromises);
    const comments = commentsResponses.map((data) => data);
    res.json(comments);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`"server starts on http://localhost:${PORT}"`);
});
