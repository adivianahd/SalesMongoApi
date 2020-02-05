const Users = require("./../models/User")

class UserService {
    getUsers() {
        const query = Users.find();

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

    getUsersById(id) {
        const query = Users.findById(id);

        return query
    }

    save(newUsers) {
        const users = new Users(newUsers);
        return users.save();
    }

    userUpdate(id, newUsers) {
        console.log("Test");

        return Users.findByIdAndUpdate(id, newUsers);
    }
}

module.exports = UserService