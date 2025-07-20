import { useState } from "react";
import axios from "axios";

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (error) {
      setErrors(<div className="bg-red-500/50 text-white p-2">
        <h3>Errors</h3>
        {error.response.data.errors.map((error) => (
          <div key={error.message}>{error.message}</div>
        ))}
      </div>);
    }
  };

  return { doRequest, errors };
};