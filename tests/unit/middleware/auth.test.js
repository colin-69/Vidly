const { User } = require("../../../models/User");
const auth = require('../../../middleware/auth');

describe('auth middleware', () => {
    it("SHOULD POPULATE REQ.USER WITH THE PAYLOAD OF A VALID JWT", () => {
        const token = new User().generateAuthToken();
        const req = {
            header: jest.fn().mockReturnValue(token)
        };
        const res = {};
        const next = jest.fn();

        auth(req, res, next);

        expect(req.user).toBeDefined();
    })
});