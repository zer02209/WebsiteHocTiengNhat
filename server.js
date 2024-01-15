const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testb",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!");
});

let selectedQuestions = []; // Lưu trữ thông tin câu hỏi ngẫu nhiên đã chọn

app.get("/kanjitest.html", (req, res) => {
  res.sendFile(__dirname + "/public/kanjitest.html");
});

app.get("/quiz1", (req, res) => {
  connection.query("SELECT * FROM quiz1 ORDER BY RAND() LIMIT 10", (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    selectedQuestions = results; // Lưu thông tin câu hỏi ngẫu nhiên đã chọn

    // Gửi danh sách câu hỏi dưới dạng JSON
    res.json(results);
  });
});

app.post("/submit", (req, res) => {
  const answers = req.body.answers; 
  let score = 0;

  for (let i = 0; i < selectedQuestions.length; i++) {
    if (answers[i] === selectedQuestions[i].correct_option) {
      score += 1; 
    }
  }

  res.json({ correctAnswers: score });
});

// Đặt thư mục chứa tệp tĩnh (public) 
app.use(express.static("public"));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
