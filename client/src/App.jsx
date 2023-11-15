import axios from "axios";
import { useState } from "react";

function App() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [response, setResponse] = useState(null);

	async function handleSubmit(e) {
		e.preventDefault();
		console.log({ firstName: name, employeeId: id });

		axios
			.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
				fullName: name,
				employeeId: id,
			})
			.then((response) => {
				setResponse(response);
				if (!response.ok) {
					throw new Error(
						"Network response was not ok: " + response.statusText
					);
				}
			})
			.catch((error) => {
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			});
	}

	return (
		<div className="box">
			<h1>Login Test Modal</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					placeholder="Enter id"
					value={id}
					onChange={(e) => setId(e.target.value)}
					required
				/>
				<input
					type="text"
					placeholder="Enter name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<button type="submit">Submit</button>
			</form>
			<a
				href={`http://localhost:5173?employeeId=${id}`}
				target="_blank"
				rel="noreferrer"
			>
				Redirect
			</a>
			<p>{response}</p>
		</div>
	);
}

export default App;
