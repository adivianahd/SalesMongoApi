const bcrypt = require('bcrypt-nodejs')

class UserController {
    constructor(UserService) {
        this.UserService = UserService
    }

    async getUsers(req, res) {
        const users = await this.UserService.getUsers()

        return res.json(users)
    }

    async getUsersById(req, res) {
        const users = await this.UserService.getUsersById(req.params.id)

        return res.json(users)
    }

    async addUser(req, res) {
        const body = req.body;

        const newBody = {
            ...body, password: bcrypt.hashSync(body.password)
        }

        if (body) {
            const user = await this.userService.addUser(newBody)
            return res.sendStatus(200)
        } else {
            return res.sendStatus(400)
        }
    }

    async userUpdate(req, res) {
        return res.json(await this.UserService.userUpdate());
        const users = await this.UserService.userUpdate(req.params.id, req.body)

        return res.json(users)
    }
}
module.exports = UserController 