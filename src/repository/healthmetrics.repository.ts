import pool from "../configs/db.config"
import { HealthMetricModel } from "../models/healthmetrics.model"

const getHealthMetrics = (async (): Promise<HealthMetricModel[]> => {
    try{
        const values =  await pool.query("SELECT * FROM health_metrics")
        return values.rows
    } catch {
        throw Error("Unable to fetch metrics")
    }
})

export const healthMetricsRepository = ({
    getHealthMetrics
})