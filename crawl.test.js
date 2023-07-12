const {normalizeURl} = require("./crawl.js")
const {test,expect}  = require("@jest/globals");

test("normalizeURL stripProtocol",()=>{
  const input="https://blog.boot.dev/path";
  const actual =normalizeURl(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
})

test("normalizeURL stripSlash",()=>{
  const input="https://blog.boot.dev/path/";
  const actual =normalizeURl(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
})

test("normalizeURL Capital",()=>{
  const input="https://blog.boot.dev/path/";
  const actual =normalizeURl(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
})

