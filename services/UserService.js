const Users = require("./../models/User")

class UserService {

    constructor() {
        this.limit = 3
    }

    getUsers(page) {
        const skip = (page - 1) * this.limit
        const query = Users.find().skip(skip).limit(this.limit).exec();

        return query
    }

    async discountUpdate() {
        const Users = await Users.find();
        const updates = [];

        users.forEach((e) => {
            if (e.cualquierCosa == null) {
                e.cualquierCosa = 0;
                updates.push(Users.findByIdAndUpdate(e.id, e));
            }
        });

        const result = await Promise.all(updates)
        return result.length + " Usuarios actualizados"
    }

    async findByUserName(username) {
        const user = await Users.find({ name: username }).limit(1).exec();
        if (user.length) {
            return user[0];
        }
        return null;
    }


    getUsersById(id) {
        const query = Users.findById(id);

        return query
    }

    addUser(data) {
        const query = new Users(data)

        return query.save()
    }

    userUpdate(id, newUsers) {
        console.log("Test");

        return Users.findByIdAndUpdate(id, newUsers);
    }
}


module.exports = UserService