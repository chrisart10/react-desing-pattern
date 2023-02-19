/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");

const peoples = [
	{
		name: "John Doe",
		age: 54,
		hairColor: "brown",
		hobbies: ["swimming", "bicycling", "video games"],
	},
	{
		name: "Brenda Smith",
		age: 33,
		hairColor: "black",
		hobbies: ["golf", "mathematics"],
	},
	{
		name: "Jane Garcia",
		age: 27,
		hairColor: "blonde",
		hobbies: ["biology", "medicine", "gymnastics"],
	},
];
const app = express();

app.use(express.json());
app.get("/data", (req, resp) => {
	resp.send(peoples);
});

app.listen(8000, () => {
	console.log("run in port 8000");
});
