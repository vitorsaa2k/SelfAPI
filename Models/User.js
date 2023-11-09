const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
	discordId: String,
	bot: Boolean,
	system: Boolean,
	bio: String,
	pronouns: String,
	username: String,
	globalName: String,
	discriminator: String,
	avatar: String,
	verified: Boolean,
	nitroType: String,
	phoneNumber: String,
	emailAddress: String,
});

const any = new Schema({}, { strict: false });

const User = mongoose.model("User", any);

module.exports = { User, userModel };
