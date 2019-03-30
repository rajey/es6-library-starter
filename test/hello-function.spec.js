import chai from 'chai';
import { helloFunction } from '../dist/lib/es6-app.min';

const expect = chai.expect;

describe('After importing hello function', () => {
  it('should return the text, Hello, Welcome to es6 library starter', () => {
    expect(helloFunction()).to.be.equal(
      'Hello, Welcome to es6 library starter'
    );
  });
});
