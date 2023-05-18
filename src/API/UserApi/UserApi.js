export const registerUser = async (user) => {
  const res = await fetch("http://localhost:3000/user", {
    method: "POST",
    body: JSON.stringify({
      ...user,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginUser = async (user) => {
  const { email, password } = user;
  const res = await fetch(
    `http://localhost:3000/user?email=${email}&password=${password}`
  );
  const data = await res.json();
  return data;
};
