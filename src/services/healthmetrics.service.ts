import console from "console"
import { HealthMetricModel } from "../models/healthmetrics.model";
import { healthMetricsRepository } from "../repository/healthmetrics.repository"

const getHealthMetrics = (async (): Promise<HealthMetricModel[]> => {
    try{
        return await healthMetricsRepository.getHealthMetrics()
    } catch (e:any) {
        throw new Error("Unable to fetch metrics");
    }
})

export const healthMetricsService = ({
    getHealthMetrics
})