export function validateUsername(username) {
  // Username: 4-20 characters, no spaces, alphanumeric only
  const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
  return usernameRegex.test(username);
}

export function validatePassword(password) {
  // Password: 8-20 characters,  no spaces
  const passwordRegex = /^[^\s]{4,20}$/;
  return passwordRegex.test(password);
}
