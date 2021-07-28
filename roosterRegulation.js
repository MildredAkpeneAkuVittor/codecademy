const assert = require('assert')
const rooster = require('/index')

describe('rooster',()=>{
  describe('.announceDawn',()=>{
    it('returns a rooster call', ()=>{
      const expected='cock-a-doodle-doo'

      const actual = Rooster.announceDawn;

      assert.equal(actual,expected)
    })
  })
  describe('.timeAtDawn',()=>{
    it('it returns it argument as a string',()=>{
      const inputNumber = 12;
      const expected  ='12'

      const actual = Rooster.timeAt(inputNumber)

      assert.equal(actual,expected)
      it('throws a range error if passed a number lessthan 0',()=>{
        const inputNumber = -1;
        const expected = RangeError;


        assert.throw(()=>{
          Rooster.timeAtDawn(inputNumber)
        },expected)
      })
      it('throws a range error if passed a number lessthan 0',()=>{
        const inputNumber = 23;
        const expected = RangeError;


        assert.throw(()=>{
          Rooster.timeAtDawn(inputNumber)
        },expected)
      })
    })
  })

})