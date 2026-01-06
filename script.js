function submitForm(e) {
  e.preventDefault();

  let ok = true;

  if (name.value.length < 3) {
    nameErr.innerText = "Name must be at least 3 characters";
    ok = false;
  } else nameErr.innerText = "";

  if (!email.value.includes("@")) {
    emailErr.innerText = "Invalid email address";
    ok = false;
  } else emailErr.innerText = "";

  if (password.value.length < 8) {
    passErr.innerText = "Password must be 8+ characters";
    ok = false;
  } else passErr.innerText = "";

  if (ok) alert("Form submitted successfully!");
}
