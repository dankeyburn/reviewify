// import os from
async function login(username, password) {
  const url = `${os.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    body: form,
  });
  if (response.ok) {
    const tokenUrl = `${os.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token`;

    try {
      const response = await fetch(tokenUrl, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        const request = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
          // Other fetch options, like method and body, if applicable
        });
      }
    } catch (e) {}
    return false;
  }
  let error = await response.json();
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}
