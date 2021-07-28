var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value',()=>{
      const inputNumber=5
      const expected =120
      const result=calculate.factorial(inputNumber)

      assert.equal(inputNumber,expected)
    })

      it('returns correct value',()=>{
      const inputNumber=3
      const expected =6
      const result=calculate.factorial(inputNumber)

      assert.equal(inputNumber,expected)
    })
    it('returns correct value 0!',()=>{
      
      assert.equal(calculate.factorial(0),1)
    })

  });
});