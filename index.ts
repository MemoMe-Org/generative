import { config } from 'dotenv'
config()

import logger from 'morgan'
import root from './routes/root.route'
import cors, { CorsOptions } from 'cors'
import express, { Application } from 'express'

const PORT = process.env.PORT || 2003

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(logger('dev'))
app.use(cors({
    origin: '*',
    methods: 'GET',
    optionsSuccessStatus: 200,
} as CorsOptions))

app.use('/', root)

app.listen(PORT, () => console.log(`http://localhost:2003`))