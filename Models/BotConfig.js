const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const configSchema = new Schema({
	firstDelay: Number,
	secondDelay: Number,
	thirdDelay: Number,
	message: String,
});

const any = new Schema({}, { strict: false });

const Config = mongoose.model("Config", any);

module.exports = { Config };
