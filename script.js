const form = document.getElementById("waitlistForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (!email) {
    message.innerText = "Pop your email in first.";
    return;
  }

  message.innerText = "Nice one — you’re on the waitlist.";
  form.reset();

  // Later, replace the message above with your Google Sheet, Supabase or CRM endpoint.
  // Example:
  // await fetch("YOUR_GOOGLE_SCRIPT_URL", {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: `email=${encodeURIComponent(email)}`
  // });
});
