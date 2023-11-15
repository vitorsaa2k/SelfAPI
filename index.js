const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const { User } = require("./Models/User");
const Guild = require("./Models/Guild");
var bodyParser = require("body-parser");
const { Config } = require("./Models/BotConfig");
const { Password } = require("./Models/Password");
require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
	res.json(await User.find());
});

app.post("/register/user", async (req, res) => {
	let userProps = req.body;
	const checkUser = await User.findOne({ discordId: req.body.discordId });
	if (!checkUser) {
		const user = new User(userProps);
		await user.save();
		res.json({
			message: "user succefully created",
		});
	} else {
		res.json({
			message: "user already exists",
			error: true,
		});
	}
});

app.post("/login", async (req, res) => {
	let password = req.body;
	const checkPassword = await Password.findOne({ password: req.body.password });
	if (!checkPassword) {
		res.json({
			message: "Wrong Password",
			error: true,
		});
	} else {
		res.json({
			message: "Successful login",
		});
	}
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
});

app.get("/server", async (req, res) => {
	const config = await Config.find();
	res.json(config[0]);
});

app.put("/server", async (req, res) => {
	let changeConfig = await Config.updateOne(req.body);
	const config = await Config.find();

	res.json(config[0]);
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
