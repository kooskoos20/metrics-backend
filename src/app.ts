import 'dotenv/config'
import express, { json, Request, Response } from 'express'
import { RegisterRoutes } from '../build/routes'
import swaggerUi from "swagger-ui-express"

export const app = express()

app.use(json())
app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  });

RegisterRoutes(app)
