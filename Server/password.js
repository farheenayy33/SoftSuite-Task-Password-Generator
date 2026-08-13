
function generatePassword(length) {

  const charPool =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";
  let password = "";
  console.log(charPool);
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  console.log("password :", password);
  return password;
}
module.exports = generatePassword;

