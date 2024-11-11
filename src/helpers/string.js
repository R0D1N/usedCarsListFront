export {
  includes,
  getLastBackslashIndex,
  removeMultiSpace,
  removeLastBackslash,
  removeAtSymbol,
  substringFromIndex,
  toLower,
  toUpper,
  toString,
  trimAfterQuestionMark,
};

const REGEX_MULTI_SPACE = / +/g;
const REGEX_SPACES = /[\s\u2000-\u200A\u205F\u3000]/g;
const REGEX_LAST_BACKSLASH = /\/$/;

const isString = (value) =>
  typeof value === "string" || value instanceof String;

const includes = (string, substring) =>
  isString(string) ? string?.includes(substring) : string;

const getLastBackslashIndex = (string) =>
  isString(string) ? string?.lastIndexOf("/") : string;

const removeMultiSpace = (string) =>
  isString(string)
    ? string?.replace(REGEX_SPACES, " ").replace(REGEX_MULTI_SPACE, " ")
    : string;

const removeLastBackslash = (string) =>
  isString(string) ? string?.replace(REGEX_LAST_BACKSLASH, "") : string;

const removeAtSymbol = (string) =>
  isString(string) && string?.startsWith("@") ? string.substring(1) : string;

const substringFromIndex = (string, index) =>
  isString(string) ? string?.substring(index + 1) : string;

const toLower = (string) => (isString(string) ? string?.toLowerCase() : string);

const toUpper = (string) => (isString(string) ? string?.toUpperCase() : string);

const toString = (value) => value?.toString();

const trimAfterQuestionMark = (string) =>
  isString(string) ? string?.split("?")[0] : string;
