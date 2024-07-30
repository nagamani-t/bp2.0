export type LOG_LEVELS = "debug" | "info" | "warn" | "error" | "critical";

export type Logger = {
  info(message: string, metadata?:Record<string, unknown>): void;
  error(message: string, metadata?: Record<string, unknown>): void;
  debug(message: string, metadata?: Record<string, unknown>): void;
  warning(message: string, metadata?: Record<string, unknown>): void;
}

export type LoggerConfiguration = {
  level: LOG_LEVELS;
  prettyPrint: boolean;
}
