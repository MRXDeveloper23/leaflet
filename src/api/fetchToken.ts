export const fetchToken = async () => {
  const res = await fetch("http://app.maxtrack.uz:8080/signup", {
    method: "POST",
    body: JSON.stringify({
      user: "rpp",
      hash: "21b95a0f90138767b0fd324e6be3457b",
      uid: "rpp22811",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch token");
  }
  const auth = await res.json();
  return auth.token;
};
