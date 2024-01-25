const express = require("express");
const app = express();

const PORT = process.env.PORT ?? 1234;

app.get("/", (req, res) => {
  res.send("<h1>Mi pagina</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
