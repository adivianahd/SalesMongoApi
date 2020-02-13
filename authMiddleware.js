const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs')
const UserService = require("./services/UserService");

const userService = new UserService();

async function strategy(username, password, cb) {
    const user = await userService.findByUserName(username);
    if (user && user.password) {
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
            return cb(null, { user })
        }

        return cb("La contraseña es incorrecta");
    }

    return cb("Usuario no existe")
}

const formParams = { usernameField: "username", passwordField: "password" };


passport.use(new Strategy(formParams, strategy));
passport.serializeUser((user, cb) => cb(null, user));


module.exports = passport;