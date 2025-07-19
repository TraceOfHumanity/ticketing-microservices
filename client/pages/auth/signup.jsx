import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/signup", {
        email,
        password,
      });
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {errors.length > 0 && (
        <div className="bg-red-500/50 text-white p-2">
          <h3>Errors</h3>
          {errors.map((error) => (
            <div key={error.message}>{error.message}</div>
          ))}
        </div>
      )}
      <button type="submit">Signup</button>
    </form>
  );
}
