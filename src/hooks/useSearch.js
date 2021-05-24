import { useEffect, useState } from "react";
import axios from "axios";
import useSecurity from "../containers/SecurityProvider/useSecurity";

const useGet = (
) => {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (path) {
      (async () => {
        try {
          setLoading(true);
          const accessToken = await getAccessToken();
          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          const fullConfig = config ? { ...config, headers } : { headers };
          const base = process.env.REACT_APP_API_BASE || "";
          const response = await axios.get(base + path, fullConfig);
          setValue(response.data);
          // resetTimeout();
        } catch (err) {
          if (err.message === "Network Error") {
            document.location.href = "/";
          }
          // setTimeout(() => {
          //   setLoading(false);
          // }, 3000);
        } finally {
          setLoading(false);
        }
      })();
    }
    // eslint-disable-next-line
  }, [...(dependencies || []), path, errorTitle, config]);

  const resultValid = !validateResponse || validateResponse(value);

  return { value: resultValid ? value : defaultValue, loading };
};

export default useGet;
