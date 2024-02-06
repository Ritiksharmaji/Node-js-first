// // const addDays = require('date-fns/addDays')
// // let date_function = days => {
// //   const correntDate = new Date()

// //   const result = addDays(correntDate, days)

// //   return result
// // }

// // module.exports = date_function

const addDays = require('date-fns/addDays')

let date_function = days => {
  // Specify the base date (22nd August 2020)
  const baseDate = new Date('22-08-2020')

  // Use date-fns addDays to calculate the result date
  const result = addDays(baseDate, days)
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
}
module.exports = date_function
