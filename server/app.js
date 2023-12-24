const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3001;

app.get("/", (request, response, next) => {
  const src = fs.createReadStream(path.resolve(__dirname, "./VICTORScv.pdf"));
  response.writeHead(200, {
    "Content-Type": "application/blob",
    "Content-Disposition": "attachment; filename=VICTORScv.pdf",
    "Content-Transfer-Encoding": "Binary",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  });

  src.pipe(response);
});

app.listen(port, console.log(`App is listening on ${port}`));
