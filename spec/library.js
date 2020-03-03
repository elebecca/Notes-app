const describe = (desc, fn) => {
    console.log("Test: ")
    console.log(desc)
    fn()
    console.log("")
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const expect = (actualValue) => ({
  toBe: (expectedValue) => {
    if (actualValue === expectedValue) {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log("expectedValue: " + expectedValue)
      console.log('fail')
      return false
    }
  },
  isTrue: () => {
    if (actualValue === true) {
      console.log("actualValue: " + actualValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('fail')
      return false
    }
  },
  isFalse: () => {
    if (actualValue === false) {
      console.log("actualValue: " + actualValue)
      console.log('pass')
      return true
    } else {
      console.log("actualValue: " + actualValue)
      console.log('fail')
      return false
    }
  }
})


  

//   example syntax
//   describe('adder', () => {
//     it('adds two numbers', () => {
//       const result = adder(1, 2)
//       expect(result).toBe(3)
//     })
//   })

