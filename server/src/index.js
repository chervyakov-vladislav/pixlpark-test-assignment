import express from "express";

const app = express();

const PORT = 8080;
const ALL_NEWS_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const ONE_NEW_URL = (newsId) =>
  `https://hacker-news.firebaseio.com/v0/item/${newsId}.json`;

app.get("/news", (_req, res) => {
  fetch(ALL_NEWS_URL)
    .then((response) => response.json())
    .then((newsIds) => newsIds.slice(0, 100))
    .then((newsIds) => {
      const newsPromises = newsIds.map((newsId) => {
        const newsUrl = ONE_NEW_URL(newsId);
        return fetch(newsUrl).then((response) => response.json());
      });
      return Promise.all(newsPromises);
    })
    .then((newsData) => {
      const sortedData = newsData.sort((a, b) => b.time - a.time);
      res.json(sortedData);
    })
    .catch((error) => console.error(error));
});

app.listen(PORT, () => {
  console.log(`"server starts on http://localhost:${PORT}"`);
});
