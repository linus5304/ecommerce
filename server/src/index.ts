import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello I am Happy")
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
