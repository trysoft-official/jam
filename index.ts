import express, { Application } from 'express'

const cors = require('cors')

const port: number = 2924

const server: Application = express()

server.use(express.json())
server.use(cors())

server.listen(port, () => console.log(`Server is running on: ${port}...`))

