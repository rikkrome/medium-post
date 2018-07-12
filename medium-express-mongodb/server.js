// server.js file
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//
// ─── DATABASE ───────────────────────────────────────────────────────────────────
//

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });
//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.get('/', (req, res) => {
  res.send("Hello World");
});

//
// ─── RUN SERVER ─────────────────────────────────────────────────────────────────
//
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
