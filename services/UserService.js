const Users = require("./../models/User")

class UserService {

    constructor() {
        this.limit = 3
    }

    getUsers() {
        const skip = (page - 1) * this.limit
        const query = Product.find().skip(skip).limit(limit).exec();

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

    UserHandler() {

    }

    getUsersById(id) {
        const query = Users.findById(id);

        return query
    }

    addUser(data) {
        const query = new User(data)

        return query.save()
    }

    userUpdate(id, newUsers) {
        console.log("Test");

        return Users.findByIdAndUpdate(id, newUsers);
    }
}


module.exports = UserService