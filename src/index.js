import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express server");
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
