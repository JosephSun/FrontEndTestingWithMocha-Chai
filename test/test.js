var expect = chai.expect;
var should = chai.should();

describe('Compare Numbers', function() {

  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });

  it('2 should be greater than 1', function() {
    expect(2).to.be.greaterThan(1);
  });
});

function isEven(num) {

}
