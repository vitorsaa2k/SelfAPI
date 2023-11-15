const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
	password: String,
});

const any = new Schema({}, { strict: false });

const Password = mongoose.model("Password", any);

module.exports = { Password };
