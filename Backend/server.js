const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
// const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id" , (req , res) =>{
//     const note = notes.find((n) => n._id=== req.params.id);
//     res.send(note);
// })

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`server started in ${PORT}`));
