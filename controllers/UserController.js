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

    async save(req, res) {
        const users = await this.UserService.save(req.body)

        return res.json(users)
    }

    async userUpdate(req, res) {
        return res.json(await this.UserService.userUpdate());
        const users = await this.UserService.userUpdate(req.params.id, req.body)

        return res.json(users)
    }
}
module.exports = UserController 