const bcrypt = require("bcrypt-nodejs");

class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }

    async getUsers(req, res) {
        const page = req.query.page ? req.query.page : 1;
        const users = await this.UserService.getUsers(page);

        return res.json(users);
    }

    async login(req, res) {
        const user = await this.UserService.getUsersById(req.body.id);
        const compare = bcrypt.compareSync(req.body.password, user.password);

        return res.send(compare);
    }

    async getUsersById(req, res) {
        const users = await this.UserService.getUsersById(req.params.id);

        return res.json(users);
    }

    async addUser(req, res) {
        const body = req.body;

        const newBody = {
            ...body,
            password: bcrypt.hashSync(body.password)
        };

        if (body) {
            await this.UserService.addUser(newBody);
            return res.sendStatus(200);
        } else {
            return res.sendStatus(400);
        }
    }

    async userUpdate(req, res) {
        const users = await this.UserService.userUpdate(req.params.id, req.body);

        return res.json(users);
    }
}
module.exports = UserController; 