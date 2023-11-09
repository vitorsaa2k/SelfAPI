const mongoose = require("mongoose");

main()
	.then(res => console.log(`successfully connected to DB`))
	.catch(err => console.log(err));

async function main() {
	await mongoose.connect(
		"mongodb+srv://vitorsaa2k:vitorsaa2k@cluster0.atce462.mongodb.net/"
	);
}
