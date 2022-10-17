export interface HealthMetricModel {
    start: Date,
    end: Date,
    session_sum_in_millis: SessionMetrics,
    user_count: number,
    release: string
}

export interface SessionMetrics {
    errored: number,
    crashed: number
    abnormal: number,
    healthy: number
}
