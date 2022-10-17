import 'dotenv/config'
import express from 'express'
import { healthMetricsController } from './controllers/healthmetrics.controller'

const app = express()
app.use("/metrics", healthMetricsController)

app.listen(3000, () => console.log("Application listening at http://localhost:3000"))
