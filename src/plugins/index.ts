import { Logger, LoggerConfiguration } from "./definition";
import PinoLogger from "./pino.logger";

export class LoggerWrapper implements Logger {
  #underlyingLogger: Logger | null = null;

  #getInitializeLogger(): Logger {
    this.configureLogger({}, false);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#underlyingLogger!;
  }

  configureLogger(
    configuration: Partial<LoggerConfiguration>,
    overrideIfExists = true,
  ): void {
    if (this.#underlyingLogger === null || overrideIfExists === true) {
      this.#underlyingLogger = new PinoLogger(
        configuration.level || "info",
        configuration.prettyPrint || false,
      );
    }
  }

  resetLogger() {
    this.#underlyingLogger = null;
  }

  debug(message: string, metadata?: object): void {
    this.#getInitializeLogger().debug(message);
  }

  error(message: string, metadata?: object): void {
    this.#getInitializeLogger().error(message);
  }

  info(message: string, metadata?: object): void {
    // If never initialized, the set default configuration
    this.#getInitializeLogger().info(message);
  }

  warning(message: string, metadata?: object): void {
    this.#getInitializeLogger().warning(message);
  }
}

export const logger = new LoggerWrapper();
