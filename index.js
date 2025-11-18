const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/transform", (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({ error: "Sentence is required" });
  }

  // split into words
  const words = sentence.trim().split(/\s+/);

  
  const word_count = words.length;

  
  const unique_words = [...new Set(words.map(w => w.toLowerCase()))];

  // reversed sentence
  const reversed_sentence = words.reverse().join(" ");

  res.json({
    word_count,
    unique_words,
    reversed_sentence
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
