const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000; // You can change this port number if needed
require("dotenv").config();

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

		res.status(200).json({ data: response.data });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
