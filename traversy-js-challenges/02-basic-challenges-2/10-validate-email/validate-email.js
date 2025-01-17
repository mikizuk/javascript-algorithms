function validateEmail(email) {
  const doesHaveTextBeforeAmpersand = email.split("@")?.[0];
  const doesHaveAmpersand = email.includes("@");
  const doesHaveDot = email.includes(".");

  return !!doesHaveTextBeforeAmpersand && doesHaveAmpersand && doesHaveDot;
}

module.exports = validateEmail;
