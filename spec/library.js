const describe = (desc, fn) => {
    console.log('Test:')
    console.log(desc)
    fn()
    console.log("")
}
  
const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (actualValue) => ({
  toBe: (expectedValue) => {
    if (actualValue === expectedValue) {
    console.log('actualValue:' + actualValue)
    console.log('expectedValue:' + expectedValue)
    console.log('pass')
    return true
    } else {
    console.log('actualValue:' + actualValue)
    console.log('expectedValue:' + expectedValue)
    console.log('fail')
    return false
    }
  }
});

const expect = (exp) => matchers(exp)

function adder(a, b) {
    return a + b 
    }

const assertion = {
    isTrue: function(assertion) {
        if (!assertion) {
            throw new Error("Assertion failed" + assertion + "is not truthy");
        }
    },
    isFalse: function (assertion) {
        if (assertion) {
            throw new Error("Assertion failed" + assertion + "is not truthy");
        }    
    },
};


  

//   example syntax
//   describe('adder', () => {
//     it('adds two numbers', () => {
//       const result = adder(1, 2)
//       expect(result).toBe(3)
//     })
//   })

