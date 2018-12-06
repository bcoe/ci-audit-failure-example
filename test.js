const add = require('./')

require('chai').should()

describe('add', () => {
  it('should add two numbers together', () => {
    add(33, 9).should.equal(42)
  })

  it('should add number(ish) key from objects toegether', () => {
    add({one: 'hey', two: 'hey'}, {four: 'hey', ten: 'hey'}).should.equal(17)
  })
})
