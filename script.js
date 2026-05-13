/* -------------------------
   COUNTDOWN TIMER
-------------------------- */

const launchDate = new Date("2026-06-01T00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);


/* -------------------------
   WAITLIST FORM + GOOGLE SHEET
-------------------------- */

const scriptURL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

document.getElementById("waitlistForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    const formMessage = document.getElementById("formMessage");
    formMessage.innerText = "Submitting...";

    try {
        await fetch(scriptURL, {
            method: "POST",
            body: new FormData(document.getElementById("waitlistForm")),
        });

        formMessage.innerText = "You're on the waitlist!";
        document.getElementById("waitlistForm").reset();

    } catch (error) {
        formMessage.innerText = "Something went wrong. Try again.";
    }
});
