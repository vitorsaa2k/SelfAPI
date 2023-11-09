const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildModel = new Schema({
	guildId: String,
	name: String,
	members: [String],
});

const any = new Schema({}, { strict: false });

const Guild = mongoose.model("Guild", any);

module.exports = Guild;
