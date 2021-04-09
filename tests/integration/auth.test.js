const request = require('supertest');
const { Genre } = require('../../models/genre');
const { User } = require('../../models/User');


describe('AUTH MIDDLEWARE', () => {
    beforeEach(() => { server = require('../../index'); });
    afterEach(async() => { 
        await Genre.remove({});
        await server.close(); });

    let token;

    const exec = () => {
        return request(server)
        .post('/api/genres')
        .set('x-auth-token', token)
        .send({ name: 'genre1' });
    }

    beforeEach(() => {
        token = new User().generateAuthToken();
    });

    it('SHOULD RETURN 401 IF NO TOKEN IS PROVIDED', async () => {
        token = "";
        const res = await exec();
        expect(res.status).toBe(401);
    });

    it('SHOULD RETURN 400 IF INVALID TOKEN', async () => {
        token = "1";
        const res = await exec();
        expect(res.status).toBe(400);
    });

    it('SHOULD RETURN 200 IF VALID TOKEN', async () => {
        const res = await exec();
        expect(res.status).toBe(200);
    });
});