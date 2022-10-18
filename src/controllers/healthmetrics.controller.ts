import { Request, Response, Router } from "express";
import { Get, Path, Route } from "tsoa";
import { HealthMetricModel } from "../models/healthmetrics.model";
import { healthMetricsService } from "../services/healthmetrics.service";

@Route("health")
export class HealthMetricsController {
    /**
    * Retrieves the health metrics for the app.
    */
  @Get()
  public async getUser(): Promise<HealthMetricModel[]> {
    return await healthMetricsService.getHealthMetrics()
  }
}