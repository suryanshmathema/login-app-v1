import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "letmein123") {
      setIsLoggedIn(true);
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {!isLoggedIn ? (
        <div className="bg-white p-6 rounded-lg shadow-xl w-80">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-xl text-center w-80">
          <h2 className="text-xl font-bold mb-4">Welcome, {username}!</h2>
          <p className="text-gray-600">You have successfully logged in.</p>
        </div>
      )}
    </div>
  );
}