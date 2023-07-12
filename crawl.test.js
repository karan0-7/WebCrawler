const {normalizeURl,getURLsfromHTML} = require("./crawl.js")
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

test("checkOutput HTMLBody link absolute",()=>{
  const inputHTML=`
  <html>
  <body>
  <a href="https://blog.boot.dev/path/">
  Link
  </a>
  </body>
  </html>
  `
  const baseURL = "https://blog.boot.dev/path/";
  const actual =getURLsfromHTML(inputHTML,baseURL);
  const expected = ["https://blog.boot.dev/path/"]
  expect(actual).toEqual(expected);
})

test("checkOutput HTMLBody link relative&Absolute",()=>{
  const inputHTML=`
  <html>
  <body>
  <a href="/path1/">
  Link1
  </a>
  <a href="https://blog.boot.dev/path2/">
  Link2
  </a>
  </body>
  </html>
  `
  const baseURL = "https://blog.boot.dev";
  const actual =getURLsfromHTML(inputHTML,baseURL);
  console.log(actual)
  const expected = ["https://blog.boot.dev/path1/","https://blog.boot.dev/path2/"]
  expect(actual).toEqual(expected);
})

test("checkOutput HTMLBody link relative&Absolute",()=>{
  const inputHTML=`
  <html>
  <body>
  <a href="invalid">
  Invalid
  </a>
  </body>
  </html>
  `
  const baseURL = "https://blog.boot.dev";
  const actual =getURLsfromHTML(inputHTML,baseURL);
  console.log(actual)
  const expected = []
  expect(actual).toEqual(expected);
})
