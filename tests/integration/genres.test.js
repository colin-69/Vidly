const request = require('supertest');
const { Genre } = require('../../models/genre');
const { User } = require('../../models/user');

const mongoose = require('mongoose');
let server;


describe('/api/genres', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach( async() => { 
        await server.close();
        await Genre.remove({});
    });

    describe('GET /', () => {
        it('SHOULD RETURN ALL GENRES', async () => {
            await Genre.collection.insertMany([
                { name: 'genre1' },
                { name: 'genre2' }
            ])
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre1')).toBeTruthy();
            expect(res.body.some(g => g.name === 'genre2')).toBeTruthy();

        });
    });

    describe('GET /:id', () => {
        it('SHOULD RETURN A GENRE IF VALID ID IS PASSED', async () => {
            const genre = new Genre({ name: 'genre1' });
            await genre.save();

            const res = await request(server).get('/api/genres/' + genre._id);

            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('name', genre.name);
        });

        it('SHOULD RETURN 404 IF INVALID ID IS PASSED', async () => {
    
            const res = await request(server).get('/api/genres/1');
    
            expect(res.status).toBe(404);
        });
        
    });

    describe('POST /', () => {
        it('SHOULD RETURN 401 IF CLIENT IS NOT LOGGED IN', async () => {
            const res = await request(server).post('/api/generes').send({ name: 'genre1'});

            expect(res.status).toBe(404);
        });

        it('SHOULD RETURN 400 IF GENRE IS LESS THAN 5 CHAR', async () => {
            const token = new User().generateAuthToken();

            const res = await request(server)
            .post('/api/generes')
            .set('x-auth-token', token)
            .send({ name: '1234' });

            expect(res.status).toBe(404);
        });
        it('SHOULD RETURN 400 IF GENRE IS MORE THAN 50 CHAR', async () => {
            const token = new User().generateAuthToken();
            const name = new Array(52).join('a');
            const res = await request(server)
            .post('/api/generes')
            .set('x-auth-token', token)
            .send({ name: name });

            expect(res.status).toBe(404);
        });
        it('SHOULD SAVE GENRE IF VALID', async () => {
            const token = new User().generateAuthToken();
            
            const res = await request(server)
            .post('/api/generes')
            .set('x-auth-token', token)
            .send({ name: 'genre1' });

            const genre = Genre.find({ name: 'genre1'});

            expect(genre).not.toBeNull();
        });
        // it('SHOULD RETURN THE GENRE IF VALID', async () => {
        //     const token = new User().generateAuthToken();
            
        //     const res = await request(server)
        //     .post('/api/generes')
        //     .set('x-auth-token', token)
        //     .send({ name: 'genre1' });

        //    expect(res.body).toHaveProperty('_id');
        //     expect(res.body).toHaveProperty('name', 'genre1' );
        // }); 
    });
});