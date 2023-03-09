const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc1NzkzNGI5LWU5Y2UtNDliYS1iZGQ0LTM4NWUxYjdmM2ZlYS0xNjc4MzgxNzA3Mjk0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2RiYjMyZWQtMGI1Yi00OThhLWJmMDItNDNiODA2NjQxM2U0IiwidHlwZSI6InQifQ.fUm-BVEKVP0QK136x3OMxNQBehyL7pe3rUDdmd5cqe8'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
