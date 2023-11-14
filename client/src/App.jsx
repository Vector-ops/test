import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        fullName: name,
        employeeId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
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
        href={`${import.meta.env.VITE_APP_CLIENT_URL}?employeeId=${id}`}
        target="_blank"
        rel="noreferrer"
      >
        Redirect
      </a>
    </div>
  );
}

export default App;
