const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000; // You can change this port number if needed
require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
	try {
		const { employeeId, fullName } = req.body;

		const response = await axios.post(
			`${process.env.SERVER_URL}/auth/login`,
			{
				employeeId,
				fullName,
			}
		);

		console.log(response);

		res.status(200).json("Recieved");
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
