import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: "./public/users-avatars",
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

app.post("/upload", upload.single("user_avatar"), (req, res) => {
  console.log(req.file);

  if (!req.file) {
    return res.send("No file");
  }
  return res.json({ filename: req.file.filename });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
