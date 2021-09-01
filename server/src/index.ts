import express from 'express'
import cookieParser from 'cookie-parser'
import sqlite from 'sqlite3'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(3000)