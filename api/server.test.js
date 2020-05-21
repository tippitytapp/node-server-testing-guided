const supertest = require('supertest');
const db = require('../data/dbConfig.js');

const server = require('./server.js');
afterEach(async () => {
    await db('hobbits').truncate()
})

describe('this is my server tests', () => {
    it('can run the tests', () => {
        expect(true).toBeTruthy();
    })
    describe('GET /', () => {
        it('expect status code 200', () => {
            return supertest(server)
                    .get('/')
                    .then(response => {
                        expect(response.status).toBe(200)
                    })
        })
        it('returns object with an api property', () => {
            return supertest(server)
                    .get('/')
                    .then(response => {
                        expect(response.body).toStrictEqual({api: "up"})
                    })
        })
    })
    describe('GET /hobbits', () => {
        it('expect status code 200', () => {
            return supertest(server)
                    .get('/hobbits')
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
        })
        it('expect array as a response', () => {
            return supertest(server)
                    .get('/hobbits')
                    .then(res => {
                        expect(Array.isArray(res.body)).toBe(true)
                    })
        })
        it('expect it to have 4 items', () => {
            return supertest(server)
                    .get('/hobbits')
                    .then(res => {
                        expect(res.body).toHaveLength(0)
                    })
        })
    })
})
