const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../index')

chai.use(chaiHttp)

suite('GET /api/convert', () => {
  test('I can convert `gal` to `L`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'gal' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'gal')
        assert.equal(body.returnNum, 3.78541)
        assert.equal(body.returnUnit, 'l')
        assert.equal(body.string, '1gal converts to 3.78541l')
        done()
      })
  })

  test('I can convert `L` to `gal`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'L' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'l')
        assert.equal(body.returnNum, 0.26417)
        assert.equal(body.returnUnit, 'gal')
        assert.equal(body.string, '1l converts to 0.26417gal')
        done()
      })
  })

  test('I can convert `lbs` to `kg`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'lbs' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'lbs')
        assert.equal(body.returnNum, 0.45359)
        assert.equal(body.returnUnit, 'kg')
        assert.equal(body.string, '1lbs converts to 0.45359kg')
        done()
      })
  })

  test('I can convert `kg` to `lbs`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'kg' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'kg')
        assert.equal(body.returnNum, 2.20462)
        assert.equal(body.returnUnit, 'lbs')
        assert.equal(body.string, '1kg converts to 2.20462lbs')
        done()
      })
  })

  test('I can convert `mi` to `km`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'mi' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'mi')
        assert.equal(body.returnNum, 1.60934)
        assert.equal(body.returnUnit, 'km')
        assert.equal(body.string, '1mi converts to 1.60934km')
        done()
      })
  })

  test('I can convert `km` to `mi`', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'km' })
      .end((err, { status, body }) => {
        assert.equal(status, 200)
        assert.equal(body.initNum, 1)
        assert.equal(body.initUnit, 'km')
        assert.equal(body.returnNum, 0.62137)
        assert.equal(body.returnUnit, 'mi')
        assert.equal(body.string, '1km converts to 0.62137mi')
        done()
      })
  })

  test('If my unit of measurement is invalid, the response will be 422', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'x' })
      .end((err, { status }) => {
        assert.equal(status, 422)
        done()
      })
  })

  test('If my number is invalid, the response will be 422', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '5,2l' })
      .end((err, { status }) => {
        assert.equal(status, 422)
        done()
      })
  })

  test('If both the number and the unit of measurement are invalid, the response will be 422', done => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '5,2x' })
      .end((err, { status }) => {
        assert.equal(status, 422)
        done()
      })
  })
})
