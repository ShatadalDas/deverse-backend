const express = require("express");
const app = express();

const PORT = 3500 || process.PORT;

app.listen(PORT, () => {
  console(`server running on port ${PORT}`);
});
