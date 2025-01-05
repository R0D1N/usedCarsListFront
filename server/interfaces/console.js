const CONSOLE_COLORS = {
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  CYAN: "\x1b[36m",
  WHITE: "\x1b[37m",
  RESET: "\x1b[0m",
};

const { MODE } = process.env;

const isDevelopment = MODE === "development";

const CLEAR_COLOR = "\x1b[0m";

const CRLF = "\r\n";

const { log: consoleLog } = console;

const log = (...args) => isDevelopment && consoleLog(...args, CLEAR_COLOR);

const welcomeMessage = (port) =>
  log(
    `\nExpress server is running at ${CONSOLE_COLORS.BLUE}http://localhost:${port}\n`,
    CLEAR_COLOR,
  );

export { CONSOLE_COLORS, CLEAR_COLOR, CRLF, welcomeMessage, log };
