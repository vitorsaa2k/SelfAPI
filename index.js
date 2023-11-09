const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { User } = require("./Models/User");
const Guild = require("./Models/Guild");
var bodyParser = require("body-parser");
require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
	res.json(await User.find());
});

app.post("/register/user", async (req, res) => {
	let userProps = req.body;
	const user = new User(userProps);
	await user.save();
	res.json({
		message: "user succefully created",
	});
});

app.post("/register/guild", async (req, res) => {
	let guildProps = req.body;
	const guild = new Guild(guildProps);
	await guild.save();
	res.json({
		message: "guild succefully registered",
	});
});

app.get("/guild", async (req, res) => {
	const guild = await Guild.findOne(req.body.id);
	console.log(guild);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
