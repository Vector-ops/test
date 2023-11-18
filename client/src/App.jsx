import axios from "axios";
import { useState } from "react";

function App() {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [responseData, setResponse] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ firstName: name, employeeId: id });

		try {
			axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
				fullName: name,
				employeeId: id,
			});

			setResponse("Receieved Data");
		} catch (error) {
			console.error(
				"There was a problem with the fetch operation:",
				error
			);
		}
	}

	function handleLogout() {
		try {
			axios.post(`http://localhost:3000/auth/logout`, {
				employeeId: id,
			});
			console.log("Logged out");
			setResponse("Logged Out");
		} catch (error) {
			console.error(
				"There was a problem with the logout operation:",
				error
			);
		}
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
				<button onClick={handleLogout}>Logout</button>
			</form>
			<a
				href={`${
					import.meta.env.VITE_APP_CLIENT_URL
				}/auth/?employeeId=${id}`}
				target="_blank"
				rel="noreferrer"
			>
				Redirect
			</a>
			<p>Response: {responseData}</p>
		</div>
	);
}

export default App;
