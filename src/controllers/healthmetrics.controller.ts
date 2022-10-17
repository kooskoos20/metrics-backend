import { Request, Response, Router } from "express";
import { healthMetricsService } from "../services/healthmetrics.service";

export const healthMetricsController = Router()

healthMetricsController.get("/health", async(req: Request, res: Response) => {
    const metrics = await healthMetricsService.getHealthMetrics()
    res.json({
        metrics
    })
})
