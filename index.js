import express from "express";
import cors from "cors";
import scraping from "./scrape.js";

const app = express();
const PORT = 5022;

app.use(cors());

app.get("/scrape", async (req, res) => {
  try {
    const dados = await scraping();

    if (dados && dados.length > 0) {
      res.json({ status: "success", data: dados });
    } else {
      res.json({ status: "success", data: "Nenhum dado encontrado" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  return "Servidor rodando.";
});
