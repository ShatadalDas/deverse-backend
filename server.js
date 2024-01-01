const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3500 || process.env.PORT

app.use(cors())

app.use("/api/user", require("./routes/user"))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
