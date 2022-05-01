export const testLoggerRateLimiter = () => {
  console.log("test logger");

  class Logger {
    //initialize ds here
    private loggerMap: { [key: string]: number };
    constructor() {
      this.loggerMap = {};
    }

    //Returns true if the message should be printed in the given timestamp
    //otherwise return false
    //If this method returns false, the message will not be printed.
    //The timestamp is in seconds granularity.
    shouldPrintMessage(timestamp: number, message: string): boolean {
      if (
        this.loggerMap[message] === undefined ||
        this.loggerMap[message] + 10 <= timestamp
      ) {
        this.loggerMap[message] = timestamp;
        console.log(this.loggerMap);
        return true;
      } else {
        console.log(this.loggerMap);
        return false;
      }
    }
  }

  const logger = new Logger();
  console.log(logger.shouldPrintMessage(1, "foo"));
  console.log(logger.shouldPrintMessage(2, "bar"));
  console.log(logger.shouldPrintMessage(3, "foo"));
  console.log(logger.shouldPrintMessage(8, "bar"));
  console.log(logger.shouldPrintMessage(10, "foo"));
  console.log(logger.shouldPrintMessage(11, "foo"));
  console.log(logger.shouldPrintMessage(15, "foo"));
  console.log(logger.shouldPrintMessage(21, "foo"));
};
