const form = document.getElementById("waitlistForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    message.innerText = "Submitting...";
    try {
        const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `email=${encodeURIComponent(email)}`
        });
        message.innerText = "You're on the waitlist!";
        form.reset();
    } catch (error) {
        message.innerText = "Something went wrong. Try again.";
    }
});
